function sounds(){

  const jungle = new Audio("../sounds/Floresta.wav");

  const rain = new Audio("../sounds/Chuva.wav");

  const fire = new Audio("../sounds/Lareira.wav");

  const coffee = new Audio("../sounds/Cafeteria.wav");

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

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
    kitchenTimer
  }
}

export {sounds}