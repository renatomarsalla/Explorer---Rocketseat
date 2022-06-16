import {element} from "./elements.js"

const{inputVolumeJungle,inputVolumeRain,inputVolumeFire,inputVolumeCoffee} = element

function sounds(){

  const jungle = new Audio("../sounds/Floresta.wav");
  
  const rain = new Audio("../sounds/Chuva.wav");

  const fire = new Audio("../sounds/Lareira.wav");

  const coffee = new Audio("../sounds/Cafeteria.wav");

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  // let valueJungle = document.querySelector('#jungle');

  function jungleSound(){
    jungle.play();
    rain.pause();
    fire.pause();
    coffee.pause();
    // volume();
    jungle.loop = true;

  }

  function jungleVolume(){
    inputVolumeJungle.addEventListener('change', function(event){
      jungle.volume = event.target.value;
      console.log(jungle.volume);
    });
    
  }

  function rainVolume(){
    inputVolumeRain.addEventListener('change', function(event){
      rain.volume = event.target.value;
    });
  
  }

  function fireVolume(){
    inputVolumeFire.addEventListener('change', function(event){
      fire.volume = event.target.value;
    });
  
  }
  function coffeeVolume(){
    inputVolumeCoffee.addEventListener('change', function(event){
      coffee.volume = event.target.value;
    });
  }

  function rainSound(){
    jungle.pause();
    rain.play();
    fire.pause();
    coffee.pause();
    rain.loop = true;
  }

  function fireSound(){
    jungle.pause();
    rain.pause();
    fire.play();
    coffee.pause();
    fire.loop = true;
  }

  function coffeeSound(){
    jungle.pause();
    rain.pause();
    fire.pause();
    coffee.play();
    coffee.loop = true;
  }

  // jungleVolume();
  // rainVolume();
  // coffeeVolume();
  // fireVolume();

  

  return {
    jungleSound,
    rainSound,
    fireSound,
    coffeeSound,
    kitchenTimer,
    jungleVolume,
    rainVolume,
    fireVolume,
    coffeeVolume
    
  }
}



export {sounds}