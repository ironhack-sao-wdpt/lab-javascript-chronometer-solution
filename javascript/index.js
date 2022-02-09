const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // 1. Pegar a quantidade atual de minutos
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  // 2. Atualizar o conteúdo dos elementos HTML
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // 1. Pegar a quantidade atual de segundos
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  // 2. Atualizar o conteúdo dos elementos HTML
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );

  // 2. Atualizar o conteúdo dos elementos HTML
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  // 1. Pegar o tempo do split atual
  const listItem = `<li>${chronometer.split()}</li>`;

  // 2. Criar um novo item de lista com ele
  splitsElement.insertAdjacentHTML('beforeend', listItem);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // 2. Parar o cronômetro
  chronometer.stop();

  // 3. Alterar o texto do botão esquerdo
  btnLeftElement.innerText = 'START';

  // 4. Alterar o texto do botão direito
  btnRightElement.innerText = 'RESET';

  toggleButtonColors();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  // 2. Iniciar o cronômetro
  chronometer.start(printTime);

  // 3. Alterar o texto do botão esquerdo
  btnLeftElement.innerText = 'STOP';

  // 4. Alterar o texto do botão direito
  btnRightElement.innerText = 'SPLIT';

  toggleButtonColors();
}

function setResetBtn() {
  chronometer.reset();
  printTime();

  while (splitsElement.firstChild) {
    splitsElement.lastChild.remove();
  }

  // splitsElement.innerHTML = '';
}

function toggleButtonColors() {
  // 5. Alterar a cor do botão esquerdo
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  // 6. Alterar a cor do botão direito
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // 1. Escutar click do usuário no botão da esquerda

  // SE o cronômetro estiver PARADO:
  if (btnLeftElement.innerText === 'START') {
    setStartBtn();
  } else if (btnLeftElement.innerText === 'STOP') {
    // SE o cronômetro estiver RODANDO:
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // SE o cronômetro estiver PARADO:
  if (btnLeftElement.innerText === 'START') {
    setResetBtn();
  } else if (btnLeftElement.innerText === 'STOP') {
    // SE o cronômetro estiver RODANDO:
    setSplitBtn();
  }
});
