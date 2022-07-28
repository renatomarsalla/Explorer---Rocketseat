import { element } from "./elements.js";
import { events } from "./events.js";


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
  
  } = element
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
    buttonDecrementLight,
    
  });


// ----------------------------------------------------

  // botoes do countdown
  event.play();
  event.stop();
  event.increment();
  event.decrement();

  event.playDark();
  event.stopDark();
  event.incrementDark();
  event.decrementDark();

  // botoes de audio
  event.jungle();
  event.rain();
  event.coffee();
  event.fire();


  // slider de volume
  event.volJungle();
  event.volRain();
  event.volFire();
  event.volCoffee();

  // dark mode
  event.darkModes();


  

