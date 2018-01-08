class GameObject {
    //Attributes
    protected _name : string;
    protected _xPos : number;
    protected _yPos : number;
    protected _element : HTMLElement;

    //Constructor
    constructor(name: string, xPos: number = 0, yPos: number = 0) {
        this._name = name;
        this._xPos = xPos;
        this._yPos = yPos;
    }

    //Methods
    //Render object to DOM-element
    public render(container : HTMLElement): void {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;

        container.appendChild(this._element);
    }

    //Update the game object
    public update(): void {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
}