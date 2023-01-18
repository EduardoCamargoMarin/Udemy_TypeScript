// Day 5 - Exercise 4


class Employee{ //para evitar usar o this.title você pode deixar como public
    constructor(public title: string, public salary: number) {}
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
