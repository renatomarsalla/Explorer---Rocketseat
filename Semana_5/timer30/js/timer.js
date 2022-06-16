import {sounds} from "./sounds.js"

const sound = sounds();

function timer(){

  let minutesDisplay = document.querySelector('.minutes');
  let secondsDisplay = document.querySelector('.seconds');
  let timeOut;

  function countDown(){
    timeOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if(minutes<=0 && seconds<=0){
        sound.kitchenTimer.play();
        return;
      }

      if(seconds<=0){
        seconds = 60;

        minutes--;
        minutesDisplay.textContent = String(minutes).padStart(2,"0");
        
      }

      seconds--;
      secondsDisplay.textContent = String(seconds).padStart(2,"0");

      console.log(seconds);
      countDown();

    },1000);
  }

  function pause(){
    clearTimeout(timeOut);
  }

  function incrementTime(){
    if((Number(minutesDisplay.textContent) + 5) <= 50){
      let minutes = Number(minutesDisplay.textContent);
      minutes = minutes + 5;
      minutesDisplay.textContent = String(minutes).padStart(2,"0");;
    }
  }
  function decrementTime(){
    if((Number(minutesDisplay.textContent) - 5) > 0){
      let minutes = Number(minutesDisplay.textContent);
      minutes = minutes - 5;
      minutesDisplay.textContent = String(minutes).padStart(2,"0"); 
    }
    
    
  }

  return{
    countDown,
    pause,
    incrementTime,
    decrementTime
  }

}

export {timer}