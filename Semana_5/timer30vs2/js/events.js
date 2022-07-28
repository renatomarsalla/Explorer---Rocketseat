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
  buutonMode,
  bodys,
  buttonPlayLight,
  buttonStopLight,
  buttonIncrementLight,
  buttonDecrementLight,
  
}){

  let mode = false;

  function play(){
      buttonPlay.addEventListener('click', function(){
        timers.countDown();
      });
  }

  function playDark(){
      buttonPlayLight.addEventListener('click', function(){
        timers.countDown();
      });
  }

  function stop(){
    buttonStop.addEventListener('click', function(){
      timers.pause();
    });
  }

  function stopDark(){
    buttonStopLight.addEventListener('click', function(){
      timers.pause();
    });
  }

  function increment(){
    buttonIncrement.addEventListener('click', function(){
      // alert('increment acionado');
      timers.incrementTime();
    });
  }

  function incrementDark(){
    buttonIncrementLight.addEventListener('click', function(){
      timers.incrementTime();
    });
  }

  function decrement(){
    buttonDecrement.addEventListener('click', function(){
      timers.decrementTime();
    });
  }

  function decrementDark(){
    buttonDecrementLight.addEventListener('click', function(){
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

  
  function volJungle(){
    sound.jungleVolume();
  }

  function volRain(){
    sound.rainVolume();
  
  }

  function volFire(){
    sound.fireVolume();
  }

  function volCoffee(){
    sound.coffeeVolume();
  }

  function darkModes(){  
    buutonMode.addEventListener('click', function(){
      if(mode == false){
        bodys.classList.add('darkmode');
        buttonPlay.classList.add('hide');
        buttonPlayLight.classList.remove('hide');

        buttonStop.classList.add('hide');
        buttonStopLight.classList.remove('hide');

        buttonIncrement.classList.add('hide');
        buttonIncrementLight.classList.remove('hide');

        buttonDecrement.classList.add('hide');
        buttonDecrementLight.classList.remove('hide');
        mode=true;
      }
      else{
        bodys.classList.remove('darkmode');
        buttonPlay.classList.remove('hide');
        buttonPlayLight.classList.add('hide');

        buttonStop.classList.remove('hide');
        buttonStopLight.classList.add('hide');

        buttonIncrement.classList.remove('hide');
        buttonIncrementLight.classList.add('hide');

        buttonDecrement.classList.remove('hide');
        buttonDecrementLight.classList.add('hide');
        mode=false;
      }
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
    volJungle,
    volRain,
    volFire,
    volCoffee,
    darkModes,
    playDark,
    stopDark,
    incrementDark,
    decrementDark,
    
  }


}

export {events}