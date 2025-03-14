// Implementation of the default theam of the game

class TheamImp extends Theam {
    
    constructor() {
        super();
    }

    message = '';

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
    gameBoardContainer() {
        return `
            <div class='main-div game-screen' id='game-board-div'>
                    
                </div>
        `;
    }

    gameBoard(gameArr = []) {
        let boardStr = "<div class='game-board' id='game-board'>";
        if(gameArr.length === 0){
            for(let i = 1; i < 10; i++){
                boardStr += `<div class="game-cell" data-cellno="${i}" data-hover='true'></div>`
            }
        //     return `
            
        //         <div class="game-cell" data-cellno="1" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="2" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="3" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="4" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="5" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="6" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="7" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="8" data-hover='true'></div>
        //         <div class="game-cell" data-cellno="9" data-hover='true'></div>
        //     </div>
        // `;
        }else {
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){

                }
            }
        }
        return boardStr += "</div>";
    }

    topDisplay() {
        return `
            <div class="info-display game-screen" id="top-display">
                <div>
                    <span class="info-name">Jon Doe</span>
                </div>
                <div class="info-score-div">
                    <span class="info-score" >Score:</span>
                    <span class="info-score">0</span>
                </div>
                <div>
                    <span class="info-symbol"></span>
                </div>
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
                <span class='popup-header'>Oops!</span><p class='popup-content'>${ this.message===undefined ||this.message==="" ? "Game over, but you're not out!" : msg }</p>
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
                <span class='popup-header'>Info</span><p class='popup-content'>${ this.message===undefined ||this.message==="" ? "" : msg }</p>
                <div class='btn-div'>
                    <div class="play-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </div>
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

            <div class='msg pause-msg'>
                <span class='popup-header'>Pause</span><p class='popup-content'>${ this.message===undefined ||this.message==="" ? "" : msg }</p>
                <div class='btn-div'>
                    <div class="play-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </div>
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

            <div class='msg win-msg'>
                <span class='popup-header'>WINNER</span><p class='popup-content'>You win the Game🥳🎉</p>
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
            <div class='msg lose-msg'>
                <span class='popup-header'>LOSE</span><p class='popup-content'>You lose 😭😭😭</p>
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
        </div>`
    }

    popupError() {
        let popupDiv = document.querySelector('#popup-msg-div');
        if(popupDiv){
            popupDiv.style.display = 'flex';
            popupDiv.querySelectorAll('.msg').forEach(element => element.style.display = 'none');
            popupDiv.querySelector('.error-msg').style.display = 'flex';
        }
    }

    popupInfo(msg) {
        this.message = msg;
        let popupDiv = document.querySelector('#popup-msg-div');
        if(popupDiv){
            popupDiv.style.display = 'flex';
            popupDiv.querySelectorAll('.msg').forEach(element => element.style.display = 'none');
            popupDiv.querySelector('.info-msg').style.display = 'flex';
        }
    }

    popupPause() {
        let popupDiv = document.querySelector('#popup-msg-div');
        if(popupDiv){
            popupDiv.style.display = 'flex';
            popupDiv.querySelectorAll('.msg').forEach(element => element.style.display = 'none');
            popupDiv.querySelector('.pause-msg').style.display = 'flex';
        }
    }

    popupWin() {
        let popupDiv = document.querySelector('#popup-msg-div');
        if(popupDiv){
            popupDiv.style.display = 'flex';
            popupDiv.querySelectorAll('.msg').forEach(element => element.style.display = 'none');
            popupDiv.querySelector('.win-msg').style.display = 'flex';
        }
    }

    popupLose() {
        let popupDiv = document.querySelector('#popup-msg-div');
        if(popupDiv){
            popupDiv.style.display = 'flex';
            popupDiv.querySelectorAll('.msg').forEach(element => element.style.display = 'none');
            popupDiv.querySelector('.lose-msg').style.display = 'flex';
        }
    }
}