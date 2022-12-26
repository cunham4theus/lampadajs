const turnOn = document.getElementById('turn-on');
const turnOff = document.getElementById('turn-off');
const lamp = document.getElementById('lamp');


function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}
function lampOn() {
  if(!isLampBroken()) {
    lamp.src = '/assets/img/acesa.png';
  }
}
function lampOff() {
  if(!isLampBroken()) {
    lamp.src = '/assets/img/apagada.png';
  }
}
function lampBroken() {
  lamp.src = '/assets/img/quebrada.png';
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
