const textLeftElement = document.getElementById('textLeft');
const textRightElement = document.getElementById('textRight');
const optionActButtons = document.getElementById('actionControls');
const resetBtn = document.getElementsByClassName('btnReset')[0];
// const backPageBtn = document.getElementsByClassName('btnBackPage')[0];

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function restart () {
  return startGame()
}
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

// function typeWriter(elemento, text) {
//   const textoArray = text.split('');
//   elemento.innerText = '';
//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerHTML += letra, 50 * i);
//   });
// }

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textLeftElement.innerText = textNode.textLeft
  textRightElement.innerText = textNode.textRight
  while (optionActButtons.firstChild) {
    optionActButtons.removeChild(optionActButtons.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btnAct')
      button.addEventListener('click', () => selectOption(option))
      optionActButtons.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    textLeft: 'Já é noite e você está precisando de uma bebida, a Taverna de Dallas é um lugar bem movimentado e com música alta, normalmente com uma atmosfera alegre. Ao entrar, você senta e se depara com um grupo de exploradores em uma mesa próxima ao bar, discutindo os detalhes de sua próxima missão.',
    textRight: 'Eles haviam sido contratados para encontrar um objeto místico que estava escondido nas profundezas de uma masmorra, mas ainda não haviam planejado a estratégia para a jornada.',
    options: [
      {
        text: 'Pegar uma bebida',
        setState: { beer: true },
        nextText: 2
      },
      {
        text: 'Juntar-se aos exploradores',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    textLeft: 'Um guerreiro de aparência imponente ergue sua taça de hidromel e chama a atenção dos outros membros.',
    textRight: '"Companheiros, nós preparar para a jornada que vir! Mas antes, aproveitar noite e beber em honra do sucesso futuro!", disse Clargoth, o líder orc do grupo, com um sorriso malicioso no rosto.',
    options: [
      {
        text: 'Oferecer um brinde aos exploradores',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: false },
        nextText: 3.1
      },
      {
        text: 'Conversar com Clargoth',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: true },
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
    textLeft: `Ao oferecer um brinde para Clargoth e seu grupo, ele ergue a sobrancelha em surpresa, mas logo aceita com um sorriso largo no rosto e diz:
    "Muito obrigado, meu amigo. Nós comemorar nossa vitória juntos!", levantando a caneca de hidromel em um brinde"`,
    textRight: 'Vejo que você gosta de aventuras, hmmm... Deseja se juntar à nós? exclama Clargoth,',
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
    textRight: 'Clargoth é um líder orc leal e forte que sempre terá o interesse de seus amigos em primeiro lugar.',
    options: [
      {
        text: 'Oferecer uma bebida para Clargoth',
        requiredState: (currentState) => currentState.beer,
        setState: { beer: false },
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
    textLeft: 'Clargoth bebe a bebida em um gole só, mostrando sua habilidade de consumir grandes quantidades de álcool. Depois de terminar, Clargoth bate na mesa com força e grita "Mais um pro time!" e então ele começa a cantar uma música de sua terra natal. Os outros frequentadores da taverna param para ouvir, enquanto o orc entoa a canção com uma voz potente e rouca.. Você e os outros membros da mesa se juntam a ele na cantoria, criando uma atmosfera animada na taverna. Depois de alguns minutos, a música termina e Clargoth se volta para você, com um olhar de cumplicidade.',
    textRight: 'Pensando bem... Antes você precisa provar que é digno!',
    options: [
      {
        text: 'Eu sou digno!',
        setState: { group: true },
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
    textLeft: `Ele se vira para você com uma expressão séria, mas ainda amigável.
    "Eu vou fazer algumas perguntas para testar suas habilidades e determinação. Você está pronto?"`,
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    textLeft: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    textLeft: 'While exploring the castle you come across a horrible monster in your path.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.beer,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    textLeft: 'Your attempts to run are in vain and the monster easily catches.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    textLeft: 'You foolishly thought this monster could be slain with a single sword.',
    textRight: 'BARABAM.',
    options: [
      {
        text: 'Restart',
        nextText: -1
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
    textLeft: 'As horas passam... Os exploradores bebem mais do que deveriam. Garrick, o bardô, cantava canções antigas em voz alta, enquanto Clargoth, batia em sua mesa com a caneca, rindo das piadas sujas que seus outros parceiros contavam.',
    textRight: 'Você acabou bebendo mais do que aguentava. A última coisa que se lembra é de ter acabado de tomar um grande gole de hidromel e depois tudo ficou escuro.',
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }
    ]
  }
]

startGame()