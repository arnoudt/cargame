let init = function () {
    let game = new Game();
        //Welcome message to show what purpose the game has
        setTimeout( () => {
            alert('Welkom! Het doel is om de auto in het parkeervak te krijgen. Klik op OK om de game te starten.');
            }, 1000); // in ms 
};

window.addEventListener('load', init);