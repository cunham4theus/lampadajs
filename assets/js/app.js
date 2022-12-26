const turnOn = document.getElementById('turn-on');
const turnOff = document.getElementById('turn-off');
const lamp = document.getElementById('lamp');

function lampOn() {
  lamp.src = '/assets/img/acesa.png';
}
turnOn.addEventListener('click', lampOn);

function lampOff() {
  lamp.src = '/assets/img/apagada.png';
}
turnOff.addEventListener('click', lampOff);

function lampBroken() {
  lamp.src = '/assets/img/quebrada.png';
}

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
