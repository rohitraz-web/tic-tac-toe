// The file contain all the main component related to game like handling events or chossing theam 
class Game {

    static PAUSE = 0;
    static PLAYING = 1;
    static LOADING = 2;
    static READY = 3;
    
    gameTheam = 'theam1';
    currentTheam = {}           // Imported theam object

    // Storing information about current player
    player1Name = '';           // Name of the primary player in the game.
    player2Name = '';           // Name of the secondary player in the game.
    currentPlayer = '';         // Symbol current player chosen Either 'x' or 'o'.
    secondPlayer = '';          // Symbol of second player
    player1Score = 0;
    player2Score = 0;
    
    // To know if player want to play with AI or not
    playWithAI = false;
    gameAiLevel = 1;

    // TODO: Implement the constructor of the game
    constructor() {
        
        this.init();
        this.gameEventListeners();
        this.currentTheam = {};
        this.state = Game.LOADING;
    }



    // TODO: First method to run when game will start
    init() {
        this.hideScreens();
        this.loadTheam(this.gameTheam).then(()=> {
            console.log('Theam loaded successfully. in main menu')
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

        this.currentTheam = new TheamImp();
        let gameContainer = document.getElementById('game-container');
        let gameHtml = this.currentTheam.mainMenu();
        gameHtml += this.currentTheam.inputName();
        gameHtml += this.currentTheam.gameBoardContainer();
        gameHtml += this.currentTheam.popupMessage();
        gameHtml += this.currentTheam.selectGameMode();
        gameContainer.innerHTML = gameHtml;
        gameContainer.insertAdjacentHTML('afterbegin', this.currentTheam.topDisplay())
        gameContainer.insertAdjacentHTML('beforeend', this.currentTheam.bottomDisplay())

        // Making main menu visible
        gameContainer.querySelector('#main-menu').style.display = 'flex';

        // Atteching event listenrs to the popupMessages
        gameContainer.querySelector('#popup-msg-div').addEventListener('click', this.popupEventListener.bind(this));

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
        console.log('Element id is', elementid)
        let element = document.getElementById(elementid);
        element.style.display = 'flex';
    }

    // TODO: Implement the method to show back button
    showBackButton(show) {
        let backButton = document.getElementById('back-button');
        if(show){
            backButton.style.display = 'flex';
        }else {
            backButton.style.display = 'none';
        }
    }

    // TODO: Implement the method to start the game.
    startGame() {
        // Starting a new game with previous information
    }

    // TODO: Implement the method to restart the game.
    restartGame() {

        // Restart the game with the no information change
        this.hideScreens();
        document.getElementById('game-board-div').innerHTML = this.currentTheam.gameBoard();
        this.showScreen('game-board-div');
        this.showScreen('top-display');
        this.showScreen('bottom-display');

        let board = new Board(this, this.playWithAI, this.gameAiLevel);
        let boardElement = document.getElementById('game-board');
        boardElement.addEventListener('click', board.handleEvent.bind(board));
        this.removeGameEventListener();
        board.playerTurn = this.currentPlayer;
        board.theam = this.currentTheam;
        this.updateDisplayInformation();
    }

    // TODO: Add Event listener to the game
    gameEventListeners(){
        // Add Event listener to the game container
        let gameContainer = document.getElementById('game-container');
        gameContainer.addEventListener('click', this.navigateGame.bind(this));
        console.log('Evenet listener attached'); 

        // Popup event listener
        // let popupContainer = document.getElementById('popup-div');
    }

    removeGameEventListener() {
        let gameContainer = document.getElementById('game-container');
        gameContainer.removeEventListener('click', this.navigateGame.bind(this));
        console.log('Event listener removed');
    }

    // TODO: Handling the popup events
    popupEventListener(event) {

        let buttonClicked = false;
        

        // Checking if home button is clicked navigate to main menu
        if (event.target.classList.contains('home-btn') || event.target.closest('.home-btn')) {
            buttonClicked = true;
            this.hideScreens();
            this.showScreen('main-menu');
        }else 

        // Checking if restart button is clicked restarting the game
        if (event.target.classList.contains('restart-btn') || event.target.closest('.restart-btn')) {
            console.log('Restart button clicked');
            buttonClicked = true;
            this.restartGame();
        }else 
        
        // Checking if play button get clicked
        if (event.target.classList.contains('play-btn') || event.target.closest('.play-btn')) {
            console.log('Play button get clicked');
            buttonClicked = true;
        }


        if(buttonClicked)
            event.target.closest('#popup-msg-div').style.display = 'none';

    }

    // TODO: Implement the navigation of game
    navigateGame(event) {
        console.log(event.target.id);
        let menuId = event.target.id;
        
        if(event.target.closest('.back-button')){
            menuId = 'back-button';
        }

        // Chosing an option to navigate
        
        // TODO: Implement the navigation menu
        switch(menuId){
            case 'pwai' :
                // Create board ask player name if already not exist and start the game 
                this.hideScreens('game-screen');
                this.showScreen('input-name-div');
                this.showBackButton(true);

            break;

            case 'pwf' :
                // TODO: Create board ask player's name if already not exist for both player and start the game
                this.hideScreens('game-screen');
                this.showScreen('select-mode');
                this.showBackButton(true);

            break;

            case 'settings' :
                // TODO: Show the settings screen

            break;

            case 'about' :
                // TODO: Show the about screen of specific Theam

            break;

            case 'exit':
                //TODO: Save player name, Game state and exit the game 
                window.location.href = 'https://games.razsoft.in';
            break;

            case 'ai-enter-name':
                // TODO: To enter player name who is playing game against AI
                let inputElement = document.getElementById('name-input');
                console.log('Your name is ', inputElement.value);
                this.hideScreen('input-name-div');
                this.showBackButton(false);

                // Assigning game board into game board div
                document.getElementById('game-board-div').innerHTML = this.currentTheam.gameBoard();
                this.showScreen('game-board-div');
                this.showScreen('top-display');
                this.showScreen('bottom-display');

                // Adding player information to the game object
                this.player1Name = inputElement.value === '' ? "Guest" : inputElement.value;
                this.player2Name = 'AI';
                this.currentPlayer = 'x';
                this.secondPlayer = 'o';

                // Toggling the active class for the top-display element
                let topDisplayElement = document.getElementById('top-display');
                if (topDisplayElement) {
                    topDisplayElement.classList.add('active');
                }

                // Setting all the game score to 0
                this.player1Score = 0;
                this.player2Score = 0;


                // this.enterName(event.target)
                // After name is entred start the game. 
                this.playWithAI = true;
                let board = new Board(this, this.playWithAI);
                let boardElement = document.getElementById('game-board');
                boardElement.addEventListener('click', board.handleEvent.bind(board));
                this.removeGameEventListener();
                board.playerTurn = this.currentPlayer;
                board.theam = this.currentTheam;
                this.updateDisplayInformation();



            break;

            case 'friend-enter-name':
                // TODO: To enter player name who is playing game against AI
                let playerInputElement = document.getElementById('player-name-input');
                console.log('Your name is ', playerInputElement);
                
                let friendInputElement = document.getElementById('friend-name-input');
                console.log('Your name is ', friendInputElement);

                this.hideScreen('select-mode');
                this.showBackButton(false);

                // Assigning game board into game board div
                document.getElementById('game-board-div').innerHTML = this.currentTheam.gameBoard();
                this.showScreen('game-board-div');
                this.showScreen('top-display');
                this.showScreen('bottom-display');

                // Adding player information to the game object
                this.player1Name = playerInputElement.value === '' ? "Guest" : playerInputElement.value;
                this.player2Name = friendInputElement.value === '' ? "Guest2" : friendInputElement.value;
                this.currentPlayer = 'x';
                this.secondPlayer = 'o';

                // Setting all the game score to 0
                this.player1Score = 0;
                this.player2Score = 0;


                // this.enterName(event.target)
                // TODO: After name is entred start the game. 
                this.playWithAI = false;
                let board2 = new Board(this, this.playWithAI);
                let boardElement2 = document.getElementById('game-board');
                boardElement2.addEventListener('click', board2.handleEvent.bind(board2));
                this.removeGameEventListener();
                board2.playerTurn = this.currentPlayer;
                board2.theam = this.currentTheam;
                this.updateDisplayInformation();

            break;

            case 'back-button' :
                this.hideScreen('input-name-div');
                this.showBackButton(false);
                this.hideScreens('game-screen');
                this.showScreen('main-menu');
            break;
        }
    }

    // The method used to update the display information of the game
    updateDisplayInformation() {
        this.currentTheam.updateTopInformation(this.player1Name, this.player1Score, this.currentPlayer);
        this.currentTheam.updateBottomInformation(this.player2Name, this.player2Score, this.secondPlayer);
    }

    enterName(element) {
        let value = element.value;
        console.log('YOur name is  ', value);
    }
}