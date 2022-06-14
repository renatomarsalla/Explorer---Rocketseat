import {timer} from "./timer.js"
import { sounds } from "./sounds.js";


const timers = timer();

const sound = sounds();

function events({
  buttonPlay,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  buttonJungle,
  buttonRain,
  buttonCoffee,
  buttonFire,
  
}){

  function play(){
    buttonPlay.addEventListener('click', function(){
      // alert('start acionado');
      timers.countDown();
      
    });
  }

  function stop(){
    buttonStop.addEventListener('click', function(){
      // alert('stop acionado');
      timers.pause();
    });
  }

  function increment(){
    buttonIncrement.addEventListener('click', function(){
      // alert('increment acionado');
      timers.incrementTime();
    });
  }

  function decrement(){
    buttonDecrement.addEventListener('click', function(){
      // alert('decrement acionado');
      timers.decrementTime();
    });
  }

  function jungle(){
    buttonJungle.addEventListener('click', function(){
      sound.jungleSound();
      buttonJungle.classList.add('bg');
      buttonCoffee.classList.remove('bg');
      buttonFire.classList.remove('bg');
      buttonRain.classList.remove('bg');

    } ); 
  }

  

  function rain(){
    buttonRain.addEventListener('click', function(){
      sound.rainSound();
      buttonJungle.classList.remove('bg');
      buttonCoffee.classList.remove('bg');
      buttonFire.classList.remove('bg');
      buttonRain.classList.add('bg');
    });
  }

  function coffee(){
    buttonCoffee.addEventListener('click', function(){
      sound.coffeeSound();
      buttonJungle.classList.remove('bg');
      buttonCoffee.classList.add('bg');
      buttonFire.classList.remove('bg');
      buttonRain.classList.remove('bg');
    });
  }

  function fire(){
    buttonFire.addEventListener('click', function(){
      sound.fireSound();
      buttonJungle.classList.remove('bg');
      buttonCoffee.classList.remove('bg');
      buttonFire.classList.add('bg');
      buttonRain.classList.remove('bg');
    });
  }

  return{
    play,
    stop,
    increment,
    decrement,
    jungle,
    rain,
    coffee,
    fire,
    
  }


}

export {events}