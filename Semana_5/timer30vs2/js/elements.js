const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIncrement = document.querySelector('.increment');
const buttonDecrement = document.querySelector('.decrement');
const buttonPlayLight = document.querySelector('.playlight');
const buttonStopLight = document.querySelector('.stoplight');
const buttonIncrementLight = document.querySelector('.incrementlight');
const buttonDecrementLight = document.querySelector('.decrementlight');
const buttonJungle = document.querySelector('.jungle');
const buttonRain = document.querySelector('.rain');
const buttonCoffee = document.querySelector('.coffee');
const buttonFire = document.querySelector('.fire');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let inputVolumeJungle = document.querySelector('#volumeJungle');
let inputVolumeRain = document.querySelector('#volumeRain');
let inputVolumeFire = document.querySelector('#volumeFire');
let inputVolumeCoffee = document.querySelector('#volumeCoffee');

const buutonMode = document.querySelector('.mode');
const bodys = document.querySelector('body');
// const bodys = document.querySelector('.darkmode');

const jungle = new Audio("../sounds/Floresta.wav");
const rain = new Audio("../sounds/Chuva.wav");
const fire = new Audio("../sounds/Lareira.wav");
const coffee = new Audio("../sounds/Cafeteria.wav");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export const element = {
  buttonPlay,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  buttonJungle,
  buttonRain,
  buttonCoffee,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  inputVolumeJungle,
  inputVolumeRain,
  inputVolumeFire,
  inputVolumeCoffee,
  buutonMode,
  bodys,
  buttonPlayLight,
  buttonStopLight,
  buttonIncrementLight,
  buttonDecrementLight,

  jungle,
  rain,
  fire,
  coffee,
  kitchenTimer,
  junv
}


