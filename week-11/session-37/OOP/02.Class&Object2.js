class Car{
    constructor(name, model, year){
        this.name=name;
        this.model=model;
        this.year=year;
    }
}

let car1= new Car("BMW","X5",2020);
console.log(car1);

let car2= new Car("Audi","Q7",2021);
console.log(car2);
let car3= new Car("Mercedes","GLS",2022);
console.log(car3);
console.log("Car Name:",car3.name);
console.log("Car Model:",car3.model);

//inShort==> Class is a Blueprint and new ==> Create Object from that Blueprint.