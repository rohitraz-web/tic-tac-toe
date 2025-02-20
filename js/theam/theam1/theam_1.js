// Implementation of the default theam of the game

class TheamImp extends Theam {
    
    constructor() {
        super();
    }

    mainMenu() {
        return `<div class='main-div game-screen' id='main-menu'>
                    <div class='menu-div'>
                        <div id="pwai">Play With AI</div>
                        <div id="pwf">Play With Friend</div>
                        <div id="settings">Settings</div>
                        <div id="about">About</div>
                        <div id="exit">Exit</div>
                    </div>
                </div>`;
    }

    // TODO: Implement input name class
    inputName() {
        return `<div class='main-div game-screen' id='input-name-div'>
                    <div class='input-div'>
                        <div class='name-input-set' id="pwai">
                            <label for="name" id="name-label">Enter your name:</label>
                            <input type="text" name="name" id="name-input" />
                        </div>
                        <div class='name-input-set' id="exit">
                            <button id="ai-enter-name">Enter</button>
                        </div>
                    </div>
                </div>`; 
    }

    // TODO: Implement game board
    gameBoard() {
        return `
            <div class='main-div game-screen' id='input-name-div'>
                    <div class='game-board'>
                        
                    </div>
                </div>
        `;
    }
}