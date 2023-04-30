const textLeftElement = document.getElementById('textLeft');
const textRightElement = document.getElementById('textRight');
const optionActButtons = document.getElementById('actionControls');
const resetBtn = document.getElementsByClassName('btnReset')[0];
let hp = document.getElementById("hp-bar");
let mp = document.getElementById("mp-bar");
let xp = document.getElementById("xp-bar");
let level = document.getElementById('level');
let hpfirstChild = hp.firstChild;
let mpfirstChild = mp.firstChild;
let xpfirstChild = xp.firstChild;
let hpFirstGrandChild = hpfirstChild.firstChild;
let mpFirstGrandChild = mpfirstChild.firstChild;
let xpFirstGrandChild = xpfirstChild.firstChild;

let state = {};

function startGame(num) {
  state = {
    playerName: '',
    level: 1,
  };
  showTextNode(num);
};

function loadGameState() {
  const savedState = localStorage.getItem('gameState');
  const savedPages = localStorage.getItem('gamePage');
  const savedHp = localStorage.getItem('hp');
  const savedMp = localStorage.getItem('mp');
  const savedXp = localStorage.getItem('xp');
  const savedLevel = localStorage.getItem('level');
  if (savedHp !== null || savedMp !== null || savedXp !== null) {
    hpFirstGrandChild.style.width = JSON.parse(savedHp);
    mpFirstGrandChild.style.width = JSON.parse(savedMp);
    xpFirstGrandChild.style.width = JSON.parse(savedXp);
  }
  if (savedState !== null || savedPages !== null || savedLevel !== null) {
    state = JSON.parse(savedState);
    level.innerHTML = JSON.parse(savedLevel)
    showTextNode(JSON.parse(savedPages));
  } else {
    startGame(1);
  }
};

function restart() {
  localStorage.clear();
  startGame(1);
};

resetBtn.addEventListener('click', () => {
  if (isFinished.value) {
    restart();
  } else {
    alert('Por favor espere o texto terminar de ser escrito antes de fazer uma escolha.');
    writeSpeed = 0;
  }
});

const isFinished = { value: false };
let writeSpeed = 30;

function typeWriter(newText, textElement) {
  writeSpeed = 30;
  let i = 0;
  let isH4 = false;
  textElement.innerHTML = '';

  // Verificar se o novo texto contém um elemento <h4>
  const h4Index = newText.indexOf('<h4>');
  if (h4Index !== -1) {
    // Encontrar a posição do próximo </h4>
    const closeH4Index = newText.indexOf('</h4>', h4Index) + 5;
    // Definir o conteúdo do elemento textElement até o próximo </h4>
    textElement.innerHTML = newText.substring(0, closeH4Index);
    i = closeH4Index;
  }

  function write() {
    if (i < newText.length) {
      if (newText.charAt(i) === '<' && newText.slice(i, i + 4) === '<h4>') {
        isH4 = true;
      } else if (newText.charAt(i) === '<' && newText.slice(i, i + 5) === '</h4>') {
        isH4 = false;
        textElement.innerHTML += newText.substring(i, newText.indexOf('</h4>', i) + 5);
        i = newText.indexOf('</h4>', i) + 5;
      } else {
        textElement.innerHTML += newText.charAt(i);
        i += 1;
        if (!isH4) {
          timeoutId = setTimeout(write, writeSpeed);
        } else {
          write();
        }
      }
    } else {
      isFinished.value = true;
    }
  }

  write();
}



function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); // Passa por todos os arrays de textnodes, procura o 'id' e faz textNode.id ser igual ao numero atribuido na selectOption.
  isFinished.value = false;
  typeWriter(`${textNode.textLeft}`, textLeftElement);
  typeWriter(`${textNode.textRight}`, textRightElement);
  const imgs = document.getElementById('imgs')
  while (imgs.firstChild) {
    imgs.removeChild(imgs.firstChild);
  }
  if (textNode.imgSrc1 !== "") {
    createImage(textNode.imgSrc1);
  }
  if (textNode.imgSrc2 !== "") {
    createImage(textNode.imgSrc2);
  }

  while (optionActButtons.firstChild) {
    optionActButtons.removeChild(optionActButtons.firstChild);
  }
  if (textNodeIndex === 1) {
    hpFirstGrandChild.style.width = 100 + '%';
    mpFirstGrandChild.style.width = 100 + '%';
    xpFirstGrandChild.style.width = 0 + '%';
    level.innerHTML = 1;
  }
  if (textNodeIndex === 7) {
    return addInputText(7, 'playerName', 'Escreva seu nome');
  }

  optionActButtons.innerHTML = '';

  textNode.options.forEach(option => { // Para cada options dentro do Id cria seus botões com o text.
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btnAct');

      const a = document.createElement('a');
      a.setAttribute('href', '#book-container');

      a.appendChild(button);
      optionActButtons.appendChild(a);

      button.addEventListener('click', () => {
        if (isFinished.value) {
          selectOption(option);
        } else {
          alert('Por favor espere o texto terminar de ser escrito antes de fazer uma escolha.');
          writeSpeed = 0;
        }
      });
    };
  });

  function saveGameState() {
    localStorage.setItem('gameState', JSON.stringify(state));
    localStorage.setItem('gamePage', JSON.stringify(textNodeIndex));
    localStorage.setItem('hp', JSON.stringify(hpFirstGrandChild.style.width));
    localStorage.setItem('mp', JSON.stringify(mpFirstGrandChild.style.width));
    localStorage.setItem('xp', JSON.stringify(xpFirstGrandChild.style.width));
    localStorage.setItem('level', JSON.stringify(parseInt(level.innerHTML)));
  }
  saveGameState();
  fillStateSelect();
};

function showOption(option) { // Verifica se tem o state requirido para o botão
  return option.requiredState == null || option.requiredState(state);
}; // Se a opção não pedir nada /\     ou se a opção pedir algo /\, executa a função.

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId === 5.4) {
    controlProgress("hp", 'down', 10);
  }
  if (nextTextNodeId === 5.2 || nextTextNodeId === 5.3) {
    controlProgress("xp", 'up', 10);
  }
  if (nextTextNodeId <= 0) {
    return restart();
  }
  state = Object.assign(state, option.setState); // Pega o state atual e adiciona tudo do setState clicado.
  showTextNode(nextTextNodeId);
};

function controlProgress(name, operador, hit) { // name = "hp" or "mp" or "xp" /oprd = up or down/ hit = valorporcentagem
  let progress = document.getElementById(name + "-bar");
  let firstChild = progress.firstChild;
  let firstGrandChild = firstChild.firstChild;

  let currentWidth = parseInt(firstGrandChild.style.width);
  let newWidth;

  if (operador === 'up') {
    newWidth = currentWidth + hit;
  } else if (operador === 'down') {
    newWidth = currentWidth - hit;
  } else {
    return;
  }

  firstGrandChild.style.width = newWidth + '%';
  localStorage.setItem(name, JSON.stringify(newWidth + '%'));
  state[name] = newWidth;
  dieOrUp(name);
}

function dieOrUp(name) {
  let progress = document.getElementById(name + "-bar");
  let firstChild = progress.firstChild;
  let firstGrandChild = firstChild.firstChild;
  let level = document.getElementById('level');
  if (name === 'hp' && parseInt(firstGrandChild.style.width) <= 0) {
    restart();
    alert('Sua barra de vida chegou a 0%, você morreu.');
  } if (name === 'hp') {

  }
  if (name === 'xp' && parseInt(firstGrandChild.style.width) >= 100) {
    state.level += 1;
    let currentlvl = parseInt(level.innerHTML);
    let newLvl = currentlvl + 1;
    level.innerHTML = newLvl;
    alert('Sua barra de experiência chegou a 100%! Você upou 1 level!');
    firstGrandChild.style.width = 0;
  }

};

function addInputText(numID, names, placeholder) { // Id que será add / name&id do input / placeholder
  const textNode = textNodes.find(textNode => textNode.id === numID);
  const input = document.createElement('input');
  input.type = 'text';
  input.name = names;
  input.placeholder = placeholder;
  input.id = names;

  input.addEventListener('change', () => {
    const inputName = document.getElementById(names);
    state[names] = inputName.value;
    tradePageContent();
  });

  input.setAttribute('required', 'required');
  optionActButtons.appendChild(input);

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btnAct');
      button.addEventListener('click', () => selectOption(option));
      optionActButtons.appendChild(button);
    }
  })
};

function tradePageContent() {
  const objId8 = textNodes.find((obj) => obj.id === 8);
  if (objId8) {
    objId8.textLeft = `O orc encara você com curiosidade, seus olhos amarelados brilhando com uma intensidade que demonstra um misto de surpresa e desconfiança. Com a caneca em mãos, ele aperta com mais força e se dirige a você: "Interessante... ${state.playerName}"`;
  }
};

function createImage(src) {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('rpgui-container', 'framed');
  const imgs = document.getElementById('imgs');
  imgs.appendChild(img);
}

function fillStateSelect() {
  const stateSelect = document.querySelector('#stateSelect');
  while (stateSelect.firstChild) {
    stateSelect.removeChild(stateSelect.firstChild);
  }
  for (const prop in state) {
    if (state.hasOwnProperty(prop) && state[prop] !== false) {
      const option = document.createElement('option');
      option.value = prop;
      option.text = `${prop}: ${state[prop]}`;
      stateSelect.appendChild(option);
    }
  }
};

const textNodes = [
  {
    id: 1,
    imgSrc1: "./imgs/night-tavern.png",
    imgSrc2: "./imgs/tablefull.png",
    textLeft: 'A noite caiu e você sente sede.. A taverna da cidade está sempre agitada, com música alta e um clima agradável. Ao entrar, você senta e se depara com um grupo de aventureiros em uma mesa próxima ao bar',
    textRight: 'É possível escutar que eles estão discutindo os detalhes de sua próxima expedição. Eles haviam sido contratados para encontrar um artefato místico que esta escondido nas profundezas de uma masmorra. Você percebe que eles ainda não planejaram uma estratégia para a jornada.',
    options: [
      {
        text: 'Pegar uma bebida',
        setState: { mead: 1 },
        nextText: 2
      },
      {
        text: 'Conversar com os exploradores',
        nextText: 3.2
      }
    ]
  },
  {
    id: 2,
    imgSrc1: "",
    imgSrc2: "./imgs/clargoth.png",
    textLeft: 'Um guerreiro de aparência imponente ergue sua taça de hidromel e chama a atenção dos outros membros.',
    textRight: `Com um sorriso malicioso no rosto, Clargoth, o líder orc do grupo, diz: 
    "Companheiros, devemos nos preparar para a jornada! Mas antes.. Vamos aproveitar a noite e beber em honra do sucesso futuro!"`,
    options: [
      {
        text: 'Oferecer um brinde aos exploradores',
        requiredState: (currentState) => currentState.mead === 1,
        setState: { mead: false, dignity: true },
        nextText: 3.1
      },
      {
        text: 'Conversar com Clargoth',
        nextText: 3.2
      },
      {
        text: 'Ignorar e beber sozinho',
        nextText: 12
      }
    ]
  },
  {
    id: 3.1,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `Ao oferecer uma bebida para Clargoth e seu grupo, ele ergue a sobrancelha em surpresa, mas logo aceita com um sorriso largo no rosto, e diz:
    "Muito obrigado, meu amigo. Iremos comemorar a futura vitória juntos!", levantando a caneca de hidromel em um brinde"`,
    textRight: 'Vejo que você gosta de aventuras, hmmm... Deseja se juntar à nossa caçada? Exclama Clargoth.',
    options: [
      {
        text: 'Sim! Estou sedento por ação',
        nextText: 4
      },
      {
        text: 'Não, obrigado',
        nextText: 12
      }
    ]
  },
  {
    id: 3.2,
    imgSrc1: "",
    imgSrc2: "./imgs/clargoth.png",
    textLeft: '"Ei, meu amigo. Algum problema? Meu grupo precisa se preparar para a jornada que virá em breve.", diz Clargoth, sorrindo de forma amistosa',
    textRight: 'Clargoth é um líder Orc, leal e forte, que sempre terá o interesse de seus amigos em primeiro lugar.',
    options: [
      {
        text: 'Dizer que também deseja ir atrás do artefato',
        nextText: 4
      },
      {
        text: 'Oferecer um brinde aos exploradores',
        requiredState: (currentState) => currentState.mead === 1,
        setState: { mead: false, dignity: true },
        nextText: 3.1
      },
      {
        text: 'Nada não.',
        nextText: 12
      }
    ]
  },
  {
    id: 4,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `Clargoth bebe sua bebida em um gole só, mostrando ter habilidade em consumir grandes quantidades de álcool. Depois de terminar, Clargoth bate na mesa com força e grita:
     "Mais um pro time!" e então ele começa a cantar uma música de sua terra natal. Os outros frequentadores da taverna param para ouvir, enquanto o orc entoa a canção com uma voz potente e rouca..`,
    textRight: `Você e os outros membros da mesa juntam-se todos na cantoria, criando uma atmosfera animada na taverna. Depois de alguns minutos, a música termina e Clargoth se volta para você, com um olhar de cumplicidade,
    "Pensando bem... Eu estou bêbado e meu discernimento está fraco.. Se você quer ser um membro deste grupo, você deve provar seu valor."`,
    options: [
      {
        text: 'Eu acabei de pagar uma rodada de bebida pra vocês...',
        requiredState: (currentState) => currentState.dignity,
        setState: { dignity: false },
        nextText: 6
      },
      {
        text: 'Sou forte e posso provar à você',
        nextText: 5
      },
      {
        text: 'Provar para você? Não preciso disso',
        nextText: 12
      }
    ]
  },
  {
    id: 5,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `Ele se vira para você com uma expressão séria.
    "Vou fazer algumas perguntas para testar suas habilidades. Você está pronto?".
    Clargoth diz, encarando você com um olhar desafiador.`,
    textRight: 'Você pode sentir a pressão aumentar, mas sabe que é importante provar sua habilidade para ganhar o seu respeito.',
    options: [
      {
        text: 'Pode mandar',
        nextText: 5.1
      },
    ]
  },
  {
    id: 5.1,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `"Qual é a melhor arma para se usar contra um troll de pedra?"`,
    textRight: '"Pense bem, amigo. Se o troll perceber que estamos planejando atacá-lo, ele pode ficar ainda mais feroz e nos dar um problema ainda maior."',
    options: [
      {
        text: 'Uma arma que possa causar danos por esmagamento, como um martelo de guerra ou uma maça',
        nextText: 5.2
      },
      {
        text: 'Uma lança ou uma flecha, seria capaz de penetrar na pele dura do troll de pedra',
        nextText: 5.2
      },
      {
        text: 'Usar um feitiço de congelamento',
        nextText: 5.4
      }
    ]
  },
  {
    id: 5.2,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `<h4>Você ganhou 10% de experiência.</h4>
    "Certo, e como você lidaria com um dragão que cospe fogo?"`,
    textRight: `"Os dragões são extremamente inteligentes e podem antecipar nossos movimentos. Precisamos pensar em algo que possa enganá-lo, algo que ele não espera."`,
    options: [
      {
        text: 'Usar uma arma mágica que cause danos adicionais a criaturas mágicas.',
        nextText: 5.3
      },
      {
        text: 'Atacar o dragão com uma arma inflamável, para criar uma explosão e causar mais dano',
        nextText: 5.4
      },
      {
        text: `Usar um escudo mágico ou feitiço de proteção para se proteger do fogo do dragão
        `,
        nextText: 5.3
      }
    ]
  },
  {
    id: 5.3,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `<h4>Você ganhou 10% de experiência.</h4>
    "Ok. Em uma batalha contra um grupo de goblins, como você faria com sua equipe para obter a vitória?"`,
    textRight: `"Ahh os goblins... Nossos inimigos mais frequentes, eles são ágeis e imprevisíveis, e isso pode ser um problema para nós. É necesssário ser astuto e não subestimá-los."`,
    options: [
      {
        text: 'Convencê-los a se renderem em troca de ouro e tesouros, usando o poder da persuasão',
        nextText: 5.4
      },
      {
        text: 'Manter a equipe unida e criar uma formação defensiva para proteger os membros mais fracos',
        nextText: 6
      },
      {
        text: 'Dividir a equipe em grupos menores para cobrir mais terreno e atacar os goblins por trás',
        nextText: 6
      }
    ]
  },
  {
    id: 5.4,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: '<h4>Você perde 10% da sua vida.</h4> "Sinto muito, meu amigo, mas você não tem o que é preciso para fazer parte do nosso grupo."',
    textRight: `"Nós precisamos de guerreiros fortes e habilidosos, que possam enfrentar as ameaças que encontrarmos em nossas jornadas. Talvez você precise treinar mais e aprimorar suas habilidades antes de se aventurar em perigos maiores."`,
    options: [
      {
        text: 'Tentar novamente',
        nextText: 5.1,
        requiredState: (currentState) => currentState.hp > 0,
      }
    ]
  },
  {
    id: 6,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `"Muito bem, meu amigo! Você provou ser habilidoso, e estou feliz em ter você em nosso grupo. Mas não se engane, o caminho que temos pela frente é cheio de perigos, monstros que desafiam a lógica e a própria natureza habitam a masmorra em que estamos prestes a entrar."`,
    textRight: `"Nossas habilidades e forças serão testadas além do que podemos suportar, e muitos dos que começam essa jornada não voltam" conclui Clargoth, "Saiba que a morte é um destino certo e horrível que aguarda aqueles que são fracos e imprudentes."`,
    options: [
      {
        text: 'Eu entendo os perigos que nos aguardam e estou aqui para enfrentá-los',
        nextText: 7
      },
      {
        text: 'Irei lutar até o fim por nosso objetivo',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `Clargoth olhou fixamente para você. "Antes de partirmos, preciso saber mais sobre você", disse ele franzindo os olhos em sua direção.`,
    textRight: `Não consigo ver bem seu rosto com essas roupas e capa escura.
     Me diga, qual o seu nome?`,
    options: [
      {
        text: 'Certo',
        nextText: 8
      },
      {
        text: 'Hmm... Que tal mais uma caneca de hidromel?',
        requiredState: (currentState) => currentState.mead === 1,
        setState: { mead: false },
        nextText: 12
      }
    ]
  },
  {
    id: 8,
    imgSrc1: "",
    imgSrc2: "./imgs/clargoth.png",
    textLeft: `O orc encara você com curiosidade, seus olhos amarelados brilhando com uma intensidade que demonstra um misto de surpresa e desconfiança. Com a caneca em mãos, ele aperta com mais força e se dirige a você: "Interessante... `,
    textRight: `"Seu nome é tão incomum quanto o seu rosto. Mas mesmo assim, não consigo identificar sua origem apenas por ele." Ele solta um grunhido de insatisfação e volta a tomar um gole do hidromel. A expressão em seu rosto demonstra que ele está pensando sobre o assunto.`,
    options: [
      {
        text: 'Sou um Humano',
        setState: { imHuman: true },
        nextText: 9
      },
      {
        text: 'Sou um Elfo',
        setState: { imElf: true },
        nextText: 9.1
      },
      {
        text: 'Sou um Gnomo',
        setState: { imGnome: true },
        nextText: 9.2
      },
      {
        text: 'Sou um Goblin!',
        setState: { imGoblin: true },
        nextText: 9.3
      }
    ]
  },
  {
    id: 9,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: `A`,
    textRight: 'e ganha XP',
    options: [
      {
        text: 'Restart',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: 'The monster laughed as you hid behind your shield and ate you.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    imgSrc1: "",
    imgSrc2: "",
    textLeft: 'As horas passam... Os exploradores beberam mais do que deveriam. Garrick, o bardô, cantava canções antigas em voz alta, enquanto Clargoth, batia em sua mesa com a caneca, rindo das piadas sujas que seus outros parceiros contavam.',
    textRight: 'Você acabou bebendo mais do que aguentava. A última coisa de que se lembra é de ter acabado de tomar um grande gole de hidromel e depois tudo ficou escuro.',
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }
    ]
  }
];

loadGameState()