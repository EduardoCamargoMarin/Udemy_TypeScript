// Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'):string { //validou que o greet precisa ser em string e que o event é string tambem
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));