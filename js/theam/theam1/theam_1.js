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
            <div class='main-div game-screen' id='game-board-div'>
                    <div class='game-board' id='game-board'>
                        <div class="game-cell" data-cellno="1" data-hover='true'></div>
                        <div class="game-cell" data-cellno="2" data-hover='true'></div>
                        <div class="game-cell" data-cellno="3" data-hover='true'></div>
                        <div class="game-cell" data-cellno="4" data-hover='true'></div>
                        <div class="game-cell" data-cellno="5" data-hover='true'></div>
                        <div class="game-cell" data-cellno="6" data-hover='true'></div>
                        <div class="game-cell" data-cellno="7" data-hover='true'></div>
                        <div class="game-cell" data-cellno="8" data-hover='true'></div>
                        <div class="game-cell" data-cellno="9" data-hover='true'></div>
                    </div>
                </div>
        `;
    }

    topDisplay() {

    }

    bottomDisplay() {
        
    }

    xSymbol() {
        return `
            <div class='x-symbol'></div>
        `
    }

    oSymbol() {
        return `
            <div class='o-symbol'></div>
        `
    }
}