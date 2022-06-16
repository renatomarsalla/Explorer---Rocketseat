import { element } from "./elements.js";
import { events } from "./events.js";
import { sounds } from "./sounds.js";

// import { oies } from "./ex.js";



// elements
const {
  buttonPlay,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  buttonJungle,
  buttonRain,
  buttonCoffee,
  buttonFire,
  buutonMode,
  bodys,
  buttonPlayLight,
  buttonStopLight,
  buttonIncrementLight,
  buttonDecrementLight,
  inputVolumeCoffee,
  minutesDisplay,
  secondsDisplay,} = element
// ----------------------------------------------------

// factory
  const event = events({
    buttonPlay,
    buttonStop,
    buttonIncrement,
    buttonDecrement,
    buttonJungle,
    buttonRain,
    buttonCoffee,
    buttonFire,
    buutonMode,
    bodys,
    buttonPlayLight,
    buttonStopLight,
    buttonIncrementLight,
    buttonDecrementLight
    
  });

  const sound = sounds();

// ----------------------------------------------------

  event.play();
  event.stop();
  event.increment();
  event.decrement();
  event.jungle();
  event.rain();
  event.coffee();
  event.fire();
  event.volJungle();
  event.volRain();
  event.volFire();
  event.volCoffee();
  event.darkModes();
  event.playDark();
  event.stopDark();
  event.incrementDark();
  event.decrementDark();

  
  // sound.jungleVolume();
  // sound.rainVolume();
  // sound.fireVolume();
  // sound.coffeeVolume();

  

