class Cat {
  constructor(tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
  
  feed(number) {
    this.hunger += number;
    switch (true) {
      case this.hunger <= 9:
        console.log('I am very hungry. Please feed me!');
        break;
      case this.hunger >= 10:
        console.log('Kitty has eaten. please play with me!');
        break;
      default:
        console.log('Hello! I\'m Kitty. It\'s nice to meet you!');
        break;
    }
  }

  sleep(number) {
    this.tiredness += number;
    switch (true) {
      case this.tiredness <= 9:
        console.log('Kitty is very tired and wants to sleep!');
        break;
      case this.tiredness >= 10:
        console.log('Hi there. I\'m awake!');
        break;
      default:
        console.log('Hello! I\'m Kitty. It\'s nice to meet you!');
        break;
    }
  }

  pet(number) {
    this.loneliness += number;
    switch (true) {
      case this.loneliness <= 5:
        console.log('Kitty is lonely and wants to be left alone!');
        break;
      case this.loneliness >= 9:
        console.log('Kitty wants to be petted');
        break;
      case this.loneliness >=10: 
        console.log('Kitty isn\'t lonely!');
        break;
      default:
        console.log('Hello! I\'m Kitty. It\'s nice to meet you!');
        break;
    }
  }

  mood(number) {
    this.happiness += number;
    switch (true) {
      case this.happiness <= 9:
        console.log('Kitty is sad and doesn\'t want to play!');
        break;
      case this.happiness >= 10:
        console.log('Hi there. I\'m happy today!');
        break;
      default:
        console.log('Hello! I\'m Kitty. It\'s nice to meet you!');
        break;
    }
  }
}
  
const kitty = new Cat(2, 3, 4, 5);
console.log(kitty);
console.log(kitty.feed(10));