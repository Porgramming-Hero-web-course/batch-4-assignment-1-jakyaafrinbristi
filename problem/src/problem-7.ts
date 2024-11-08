{
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

 class Car {
    make: string;
    model: string;
    year: number;
 
 constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getCarAge(): number {
    const Year = new Date().getFullYear()
    const currentCarYear=Year -this.year;
    return currentCarYear;

  }
}
 const car = new Car("Honda", "Civic", 2020);
//   console.log(car.getCarAge());
}