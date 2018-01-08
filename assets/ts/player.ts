class Player {
    //attributes
    private _car        : Car;
    private _carList    : Array<Car>;


    //constructor
    constructor() {
        
        //The cars are being created
        const car1 = new Car('car1', 100, 245, -80);
        const car2 = new Car('car2', 100, 245, -150);
        const car3 = new Car('car3', 100, 245, -40);
        const car4 = new Car('car4', 100, 245, -50)
        
        //Then we put them in an array
        this._carList = [car1, car2, car3, car4];

    }

    //methodes
    //Car generator to randomize the start car
    public generateCar(): Car {
        const car : Car = this._carList[Math.floor(Math.random() * this._carList.length)];
        console.log(car);
        return car;
    }
}