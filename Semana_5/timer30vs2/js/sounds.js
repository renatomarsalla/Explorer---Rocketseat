import {element} from "./elements.js"

const{inputVolumeJungle,inputVolumeRain,inputVolumeFire,inputVolumeCoffee,jungle,
  rain,
  fire,
  coffee,
  kitchenTimer} = element

function sounds(){

  function jungleVolume(){
    inputVolumeJungle.addEventListener('change', function(event){
      jungle.volume = event.target.value;
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

  function jungleSound(){
    jungle.play();
    rain.pause();
    fire.pause();
    coffee.pause();
    jungle.loop = true;

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

  

  return {
    jungleSound,
    rainSound,
    fireSound,
    coffeeSound,
    kitchenTimer,
    jungleVolume,
    rainVolume,
    fireVolume,
    coffeeVolume,

  }
}



export {sounds}