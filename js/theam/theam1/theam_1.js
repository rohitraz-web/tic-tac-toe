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
        return `
            <div class="info-display game-screen" id="top-display">
                <div>
                    <span>Jon Doe</span>
                </div>
                <div>
                    <span>Score:</span>
                    <span>0</span>
                </div>
                <div></div>
            </div>
        `;
    }

    bottomDisplay() {
        return `
            <div class="info-display game-screen" id="bottom-display">
                <div>
                    <span>Jon Doe2</span>
                </div>
                <div>
                    <span>Score:</span>
                    <span>0</span>
                </div>
                <div></div>
            </div>
        `;
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

    // There is 5 different types of popup messages and all the theams must implement all five types
    // 1. ERROR
    // 2. INFO
    // 3. PAUSE
    // 4. WIN
    // 5. LOSE

    popupMessage() {
        return `<div class='popup-msg-div' id='popup-msg-div'>
            <div class='msg error-msg'>
                <span class='popup-header'>Oops!</span><p class='popup-content'>Game over, but you're not out!</p>
                <div class='btn-div'>
                    <div class="home-btn">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="restart-btn">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class='msg info-msg'>
            
            </div>
            <div class='msg pause-msg'>
            
            </div>
            <div class='msg win-msg'>
            
            </div>
            <div class='msg lose-msg'>
            
            </div>
        </div>`
    }
}