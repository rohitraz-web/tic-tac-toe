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
        this.loadTheam('theam1').then(()=> {
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
        let gameHtml = theamImp.mainMenu();
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