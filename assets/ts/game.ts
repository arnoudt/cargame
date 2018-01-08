class Game {
    //Attributes
    private _parkingSpot    : ParkingSpot;
    private _player         : Player;
    private _car            : Car
    private _results        : Results;
    private _timer          : Timer;
    private _element        : HTMLElement;

    //Constructor
    constructor() {

        //Create game objects
        this._parkingSpot = new ParkingSpot('parkingSpot', -16, 230);
        this._results = new Results('results', 0, 230);
        this._timer = new Timer('timer', 0, -50);
        this._player = new Player();
        this._car = this._player.generateCar();
        
        //Event listener for keydownevent
        window.addEventListener('keydown', this.keyDownHandler);

        //Give a value to the _element
        this._element = document.getElementById('container');

        //Methodes that needs to run wen the game loads
        this.draw();
        this.countDown(10);
    }

    //Methodes
    //Draw objects on DOM-Element
    public draw(): void {

        this._parkingSpot.render(this._element);
        this._car.render(this._element);
        this._timer.render(this._element);
    }

    //Update the position of game objects
    public update(): void {

        this._parkingSpot.update();
        this._car.update();
        this._results.update();
    }    

    //Keyhandler when spacebar is pressed
    //Run method update when spacebar is pressed
    public keyDownHandler = (e : KeyboardEvent): void =>  {
        if (e.keyCode === 38) {
            this._car.move(this._car.getMaxSpeed());
            this.update();
        }
    }

    //Check if the car is in the right spot
    //Run method renderResults and remove the eventlistener(keydownevent)
    public checkIfParked(): void {

        let carName: string = this._car.getCarName();
        console.log(carName);

        const parkingRect = document.getElementById('parkingSpot').getBoundingClientRect();
        const carRect = document.getElementById(carName).getBoundingClientRect();

        if (parkingRect.left <= carRect.right && parkingRect.right >= carRect.left) {
            this.renderResults();
            const results: HTMLElement = document.getElementById('results');
            results.innerHTML = '<h2>You successfully parked the car.</h2>' + '<input class="button" type="button" value="Try again" onClick="window.location.href=window.location.href">';
        }
        else{
            this.renderResults();
            const results: HTMLElement = document.getElementById('results');
            results.innerHTML = '<h2>You failed.</h2>' + '<input class="button" type="button" value="Try again" onClick="window.location.href=window.location.href">';
        }
    }

    public renderResults(): void {
        this._results.render(this._element);
        window.removeEventListener('keydown', this.keyDownHandler);
    }

    //Countdown timer
    //Runs when the timer hits 0 and then checks if the car is parked
    public countDown(seconds: number): void {
        const element: HTMLElement = document.getElementById('timer');
        element.innerHTML = '<h2>TIME</h2>' + `<p>${seconds}</p>`;

        seconds--;

        const timer = setTimeout(() => { this.countDown(seconds);}, 1000);

        if(seconds < 0) {
            clearTimeout(timer);
            this.checkIfParked();
        }
    }
}
