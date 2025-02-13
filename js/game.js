// The file contain all the main component related to game like handling events or chossing theam 
class Game {

    static PLAYING = 0;

    // TODO: Implement the constructor of the game
    constructor() {
        
        this.init();
    }



    // TODO: First method to run when game will start
    init() {
        this.hideScreens();
        this.loadTheam('theam1');
        this.showScreen('main-menu');
    }
    
    // TODO: Method to load the theam
    loadTheam(theam){
        let gameContainer = document.getElementById('game-container');
        let gameHtml = theam.mainMenu();
        gameContainer.innerHTML = gameHtml;
    } 

    // TODO: Implement method to hide all the screen implement screen screen class. 
    hideScreens() {
        let screens = document.querySelectorAll('.game-screen');
        screens.forEach((screen) => {
            screen.style.display = 'none';
        })
    }

    // TODO: Hide a single screen by their ID.
    hideScreen() {

    }

    // TODO: Implement Show a single screen by their id.
    showScreen(elementid) {
        let element = document.getElementById(elementid);
        element.style.display = 'block';
    }

    // TODO: Implement the method to start the game.
    startGame() {

    }

    // TODO: Implement the method to restart the game.
    restartGame() {

    }
}