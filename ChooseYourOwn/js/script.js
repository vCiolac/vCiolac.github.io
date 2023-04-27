const textLeftElement = document.getElementById('textLeft');
const textRightElement = document.getElementById('textRight');
const optionActButtons = document.getElementById('actionControls');
const resetBtn = document.getElementsByClassName('btnReset')[0];
// const backPageBtn = document.getElementsByClassName('btnBackPage')[0];

let state = {};

function startGame(num) {
  state = {};
  showTextNode(num);
};

function loadGameState() {
  const savedState = localStorage.getItem('gameState');
  const savedPages = localStorage.getItem('gamePage');
  const hp = localStorage.getItem('hp');
  if (hp !== null) {
    controlProgress("hp", JSON.parse(hp))
  }
  if (savedState !== null || savedPages !== null) {
    state = JSON.parse(savedState);
    showTextNode(JSON.parse(savedPages));
  } else {
    startGame(1);
  }
};

function restart() {
  localStorage.clear('gameState');
  localStorage.clear('gamePage');
  startGame(1);
};

resetBtn.addEventListener('click', restart);

// function backPage () {
//   for (let i = 1; i < textNodes.length; i += 1) {
//     if (textLeftElement.innerText === textNodes[i].textLeft) {
//       let current = textNodes[i].id -1;
//       showTextNode(current)
//     }
//   }
// }
// backPageBtn.addEventListener('click', backPage);

function createButtons(option, bar, hit) { // bar = "hp" || "mana" || "xp" // hit = 0.1 ~ 1.
  const button = document.createElement('button');
  button.innerText = option.text;
  button.classList.add('btnAct');
  button.addEventListener('click', () => selectOption(option));
  optionActButtons.appendChild(button);
  if (bar || hit) {
    button.addEventListener('click', () => controlProgress(bar, hit));
  }
}

function typeWriter(text, element) {
  const speed = 50;
  let i = 0;
  element.innerHTML = '';
  function write() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }
  write();
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); // Passa por todos os arrays de textnodes, procura o 'id' e faz textNode.id ser igual ao numero atribuido na selectOption.
  typeWriter(`${textNode.textLeft}`, textLeftElement);
  typeWriter(`${textNode.textRight}`, textRightElement);
  while (optionActButtons.firstChild) {
    optionActButtons.removeChild(optionActButtons.firstChild);
  }
  if (textNodeIndex === 7) {
    return addInputText(7, 'playerName', 'Escreva seu nome');
  }
  textNode.options.forEach(option => { // Para cada options dentro do Id cria seus botões com o text.
    if (textNodeIndex === 8) { // tem que por o Id anterior do texto que se quer dar hit.
      createButtons(option, "hp", 10)
    }
    if (showOption(option)) {
      createButtons(option)
    }
  })
  function saveGameState() {
    localStorage.setItem('gameState', JSON.stringify(state));
    localStorage.setItem('gamePage', JSON.stringify(textNodeIndex));
  }
  saveGameState();
};

function showOption(option) { // Verifica se tem o state requirido para o botão
  return option.requiredState == null || option.requiredState(state);
} // Se a opção não pedir nada /\     ou se a opção pedir algo /\, executa a função.

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return restart();
  }
  state = Object.assign(state, option.setState); // Pega o state atual e adiciona tudo do setState clicado.
  showTextNode(nextTextNodeId);
}


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
      createButtons(option)
    }
  })
}

function tradePageContent() {
  const objId8 = textNodes.find((obj) => obj.id === 8);
  if (objId8) {
    objId8.textLeft = `Parabéns ${state.playerName}, você é dez!`;
  }
};



const textNodes = [
  {
    id: 1,
    textLeft: 'A noite caiu e você sente sede.. A Taverna de Dallas está sempre agitada, com música alta e um clima animado. Ao entrar, você senta e se depara com um grupo de aventureiros sentados em uma mesa próxima ao bar, discutindo os detalhes de sua próxima expedição.',
    textRight: 'Eles haviam sido contratados para encontrar um artefato místico que estava escondido nas profundezas de uma masmorra, mas ainda não haviam planejado a estratégia para a jornada.',
    options: [
      {
        text: 'Pegar uma bebida',
        setState: { beer: true },
        nextText: 2
      },
      {
        text: 'Juntar-se aos exploradores',
        nextText: 3.2
      }
    ]
  },
  {
    id: 2,
    textLeft: 'Um guerreiro de aparência imponente ergue sua taça de hidromel e chama a atenção dos outros membros.',
    textRight: `Com um sorriso malicioso no rosto, Clargoth, o líder orc do grupo diz: 
    "Companheiros, nós preparar para a jornada que vir! Mas antes, aproveitar noite e beber em honra do sucesso futuro!"`,
    options: [
      {
        text: 'Oferecer um brinde aos exploradores',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: false, dignity: true },
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
    textLeft: `Ao oferecer uma bebida para Clargoth e seu grupo, ele ergue a sobrancelha em surpresa, mas logo aceita com um sorriso largo no rosto e diz:
    "Muito obrigado, meu amigo. Nós comemorar nossa vitória juntos!", levantando a caneca de hidromel em um brinde"`,
    textRight: 'Vejo que você gosta de aventuras, hmmm... Deseja se juntar à nós? exclama Clargoth',
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
    textLeft: '"Ei, meu amigo. Algum problema? Meu grupo precisa se preparar para a jornada que virá em breve.", diz Clargoth, sorrindo de forma amistosa',
    textRight: 'Clargoth é um líder Orc. Leal e forte que sempre terá o interesse de seus amigos em primeiro lugar.',
    options: [
      {
        text: 'Oferecer um brinde aos exploradores',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: false, dignity: true },
        nextText: 3.1
      },
      {
        text: 'Dizer que deseja ir atrás do artefato também',
        nextText: 4
      },
      {
        text: 'Nada não.',
        nextText: 12
      }
    ]
  },
  {
    id: 4,
    textLeft: 'Clargoth bebe sua bebida em um gole só, mostrando habilidade em consumir grandes quantidades de álcool. Depois de terminar, Clargoth bate na mesa com força e grita "Mais um pro time!" e então ele começa a cantar uma música de sua terra natal. Os outros frequentadores da taverna param para ouvir, enquanto o orc entoa a canção com uma voz potente e rouca..',
    textRight: `Você e os outros membros da mesa se juntam a ele na cantoria, criando uma atmosfera animada na taverna. Depois de alguns minutos, a música termina e Clargoth se volta para você, com um olhar de cumplicidade, e diz:
    Pensando bem... Se você quer ser um membro deste grupo, você deve provar seu valor.`,
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
        text: 'Provar algo para você? Não preciso disso',
        nextText: 12
      }
    ]
  },
  {
    id: 5,
    textLeft: `Ele se vira para você com uma expressão séria.
    "Vou fazer algumas perguntas para testar suas habilidades. Você está pronto?".
    Clargoth diz, encarando você com um olhar desafiador.`,
    textRight: 'Você pode sentir a pressão aumentar, mas sabe que é importante provar sua habilidade para ganhar seu respeito.',
    options: [
      {
        text: 'Pode mandar',
        nextText: 5.1
      },
    ]
  },
  {
    id: 5.1,
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
    textLeft: `"Certo, e como você lidaria com um dragão que cospe fogo?"`,
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
    textLeft: `"Ok. Em uma batalha contra um grupo de goblins, como você faria com sua equipe para obter a vitória?"`,
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
    textLeft: `"Sinto muito, meu amigo, mas você não tem o que é preciso para fazer parte do nosso grupo."`,
    textRight: `"Nós precisamos de guerreiros fortes e habilidosos, que possam enfrentar as ameaças que encontrarmos em nossas jornadas. Talvez você precise treinar mais e aprimorar suas habilidades antes de se aventurar em perigos maiores."`,
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    textLeft: `"Muito bem, meu amigo! Você provou ser habilidoso, e estou feliz em ter você em nosso grupo. Mas não se engane, o caminho que temos pela frente é cheio de perigos, monstros que desafiam a lógica e a própria natureza habitam a masmorra em que estamos prestes a entrar."`,
    textRight: `"Nossas habilidades e forças serão testadas além do que podemos suportar, e muitos que começam essa jornada com nós não voltam" conclui Clargoth, "Saiba que a morte é um destino certo e horrível que aguarda aqueles que são fracos e imprudentes."`,
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
    textLeft: `Clargoth olhou fixamente para você. "Antes de partirmos, preciso saber mais sobre você", disse ele franzindo os olhos em sua direção.`,
    textRight: `Não consigo ver bem seu rosto com essas roupas e capa escura.
     Me diga, qual o seu nome? 
    E qual criatura é você?`,
    options: [
      {
        text: 'Hmm... Que tal mais uma caneca de hidromel?',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: false },
        nextText: 12
      },
      {
        text: 'Sou um Humano',
        setState: { imHuman: true },
        nextText: 8
      },
      {
        text: 'Sou um Elfo',
        setState: { imElf: true },
        nextText: 8
      },
      {
        text: 'Sou um Gnomo',
        setState: { imGnome: true },
        nextText: 8
      },
      {
        text: 'Sou um Goblin!',
        setState: { imGoblin: true },
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    textLeft: `Parabéns ${state.playerName}, você é dez!`,
    textRight: `uuoou  ${state.playerName} `,
    options: [
      {
        text: 'Prox',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    textLeft: `Apanha safada`,
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

function controlProgress(name, hit) {
  (function (name) {
    let progress = document.getElementById(name + "-bar");
    let firstChild = progress.firstChild;
    let firstGrandChild = firstChild.firstChild;
    firstGrandChild.style.width = `${hit}%`;
    localStorage.setItem(name, JSON.stringify(firstGrandChild.style.width));
  }
  )(name);
};