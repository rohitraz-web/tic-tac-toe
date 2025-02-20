// The file contain all the main component related to game like handling events or chossing theam 
class Game {

    static PAUSE = 0;
    static PLAYING = 1;
    static LOADING = 2;
    static READY = 3;
    
    gameTheam = 'theam1';

    // TODO: Implement the constructor of the game
    constructor() {
        
        this.init();
        this.gameEventListeners();
    }



    // TODO: First method to run when game will start
    init() {
        this.hideScreens();
        this.loadTheam(this.gameTheam).then(()=> {
            this.showScreen('main-menu');
        });
    }
    
    // TODO: Method to load the theam
    async loadTheam(theam){
        console.log('loading theam');
        
        let theamObj = theamList[theam];
        
        // Loading theam css to the document
        const existingLink = document.querySelector('link[data-theam="true"]');
        if(existingLink){
            existingLink.parentNode.removeChild(existingLink);
        } 
        // Create new Link element
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './js/theam/' + theamObj.folder + '/' + theamObj.css;
        link.setAttribute('data-theam', 'true');
        document.head.appendChild(link);
        
        let loadingCss = new Promise( function(resolve, reject){
            link.onload = () => resolve('Css loaded')
            link.onerror = () => reject('Error while loading css')
        });

        
        console.log(await loadingCss);
        console.log('loading theam in middle');

        // Loading theam javascript file
        const existingSrc = document.querySelector('script[data-theam="true"]');
        if(existingSrc){
            existingSrc.parentNode.removeChild(existingSrc);
        } 
        // Create new src element
        const script = document.createElement('script');
        script.src = './js/theam/' + theamObj.folder + '/' + theamObj.js;
        script.setAttribute('data-theam', 'true');
        document.body.appendChild(script);

        let loadingJs = new Promise(function(resolve, reject){
            script.onload = () => resolve('JS loaded');
            script.onerror = () => resolve('Error while loading JS');
        });

        console.log(await loadingJs);

        let theamImp = new TheamImp();
        let gameContainer = document.getElementById('game-container');
        // let gameHtml = theamImp.mainMenu();
        // let gameHtml = theamImp.inputName();
        let gameHtml = theamImp.gameBoard();
        gameContainer.innerHTML = gameHtml;
        console.log('theam loaded successfylly');
        return "Theam loaded"; 
    } 

    // TODO: Implement method to hide all the screen implement screen screen class. 
    hideScreens() {
        let screens = document.querySelectorAll('.game-screen');
        screens.forEach((screen) => {
            screen.style.display = 'none';
        })
    }

    // TODO: Hide a single screen by their ID.
    hideScreen(elementId) {
        let displayElement = document.getElementById(elementId);
        if(displayElement){
            displayElement.style.display = 'none';
        }
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

    // TODO: Add Event listener to the game
    gameEventListeners(){

        // Add Event listener to the game container
        let gameContainer = document.getElementById('game-container');
        gameContainer.addEventListener('click', this.navigateGame.bind(this));
        console.log('Evenet listener attached');
    }

    // TODO: Implement the navigation of game
    navigateGame(event) {
        console.log(event.target.id);
        let menuId = event.target.id; 
        // Chosing an option to navigate
        
        // TODO: Implement the navigation menu
        switch(menuId){
            case 'pwai' :
                // TODO: Create board ask player name if already not exist and start the game 
                this.hideScreens('game-screen');
                this.showScreen('input-name');

            break;

            case 'pwf' :
                // TODO: Create board ask player's name if already not exist for both player and start the game  
            break;

            case 'settings' :
                // TODO: Show the settings screen
            break;

            case 'about' :
                // TODO: Show the about screen of specific Theam

            break;

            case 'exit':
                //TODO: Save player name, Game state and exit the game 
            break;

            case 'ai-enter-name':
                // TODO: To enter player name who is playing game against AI
                let inputElement = document.getElementById('name-input');
                console.log('Your name is ', inputElement.value);
                this.hideScreen('input-name-div');
                this.showScreen('game-board');
                // this.enterName(event.target)
            break;
        }
    }

    enterName(element) {
        let value = element.value;
        console.log('YOur name is  ', value);
    }
}