// Day 5 - Exercise 2

interface Person {
  name: string
  age: number
}

class Person implements Person{ // chamar a class a partir da interface você usa o implements
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);