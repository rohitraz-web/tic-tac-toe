// Board related activity - handling player state, board state, game logic, etc. 
class Board {

    gameArr = [['','',''],['','',''],['','','']];
    playerTurn = '';
    gameTurn = 0;
    theam = {};
    resultPublished = false;
    emptyCells = [];

    // list of all the winning combination in the game
    winningCombinations = [
        // Rows
        [ [0, 0], [0, 1], [0, 2] ],
        [ [1, 0], [1, 1], [1, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        // Columns
        [ [0, 0], [1, 0], [2, 0] ],
        [ [0, 1], [1, 1], [2, 1] ],
        [ [0, 2], [1, 2], [2, 2] ],
        // Diagonals
        [ [0, 0], [1, 1], [2, 2] ],
        [ [0, 2], [1, 1], [2, 0] ]
    ];

    constructor(gameObj, playAI = false, aiLevel = 3) {
        this.gameObj = gameObj;
        this.playAI = playAI;
        this.resultPublished = false;
        this.topElement = document.getElementById('top-display');
        this.bottomElement = document.getElementById('bottom-display');
        this.aiLevel = aiLevel;
    }

    handleEvent(event) {
        let cell = event.target;
        let cellNo = cell.dataset.cellno - 1;
        console.log('Cell clicked : ', cellNo);

        console.log("THis ", this);

        if(cellNo === undefined || isNaN(cellNo)){
            console.log('An undefiend cell is clicked');
            return;
        }

        cell.dataset.hover = false;
        
        // TODO: Implement system to assign values to the tic tac toe cell. 
        let i = Math.floor(cellNo/3.0);
        let j = cellNo%3;
        // let oldPlayer = this.playerTurn;

        console.log("I and J ", i, j);

        if(this.playerTurn === this.gameObj.currentPlayer){
                this.gameArr[i][j] = this.gameObj.currentPlayer;
                cell.innerHTML = this.drawSymbol(this.gameObj.currentPlayer)
                
                if(this.playAI){
                    this.gameTurn++;
                    if(this.resultPublished) 
                        return;
                    this.checkWinner();
                    this.playBoardAI();
                    this.playerTurn = this.gameObj.currentPlayer;
                    return;
                }
                this.playerTurn = this.gameObj.secondPlayer;
                this.setActivePlayer();

        } else if(this.playerTurn === this.gameObj.secondPlayer) {
            this.gameArr[i][j] = this.gameObj.secondPlayer;
            cell.innerHTML = this.drawSymbol(this.gameObj.secondPlayer);
            this.playerTurn = this.gameObj.currentPlayer;             
        }
        else {
            this.setActivePlayer();
            return;

        }
        this.setActivePlayer();
        this.gameTurn++;

        console.log("Game board State:" ,this.gameArr);

        if(this.gameTurn < 3 || this.resultPublished){
            return;
        }
        
        this.checkWinner();
    }

    setActivePlayer(){
        if(this.playerTurn === 'o'){
            this.topElement.classList.remove('active');
            this.bottomElement.classList.add('active');
        }else if(this.playerTurn === 'x'){
            this.bottomElement.classList.remove('active');
            this.topElement.classList.add('active');
        }
    }

    // Draw the HTML for symbol based on the player symbol
    drawSymbol(playerSymbol){
        return playerSymbol === 'x' ? this.theam.xSymbol() : this.theam.oSymbol();
    }

    // Function to check for the winner
    checkWinner() {

        for (let combination of this.winningCombinations) {
            const [a, b, c] = combination;
            if (this.gameArr[a[0]][a[1]] && 
                this.gameArr[a[0]][a[1]] === this.gameArr[b[0]][b[1]] && 
                this.gameArr[a[0]][a[1]] === this.gameArr[c[0]][c[1]]) 
                
                {               
                    console.log(`Player ${this.gameArr[a[0]][a[1]]} wins!, current player is: ${this.gameObj.currentPlayer}`);

                    // Pop out the message
                    if(this.gameArr[a[0]][a[1]] === this.gameObj.currentPlayer){
                        this.gameObj.currentTheam.popupWin();
                        this.gameObj.player1Score++;
                        this.resultPublished = true;
                        console.log("Score is updated: 1 ");
                    }else {
                        this.gameObj.currentTheam.popupLose();
                        this.gameObj.player2Score++;
                        this.resultPublished = true;
                        console.log("Score is updated: 1 ");

                    }
                return;
            }
        }

        if (this.gameTurn === 9) {
            console.log("It's a draw!");
            this.gameObj.currentTheam.popupInfo("It is a Draw 👍👍👍");
        }
    }

    // Function to load an existing board
    updateBoard() {
        
    }

    // AI for the game. 
    playBoardAI(){
        this.emptyCells = [];        // Total empty cells on the board
        let move = [];              // The AI move [i,j]

        // Finding all the empty cells. 
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.gameArr[i][j] === '') {
                    this.emptyCells.push([i, j]);
                }
            }
        }

        // Return from function no more moves are left.
        if(this.emptyCells.length === 0)
            return ;

        let i = undefined;
        let j = undefined;
        
        if(this.aiLevel === 1) {
            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            i = emptyCells[randomIndex][0];
            j = emptyCells[randomIndex][1];
        }
        else if(this.aiLevel === 2){
            [i, j] = this.boardAILevel2();
        }else if(this.aiLevel ==3){
            [i, j] = this.boardAILevel3();
        }
        // alert("Places are"+i+j);

        if(typeof i !== "undefined" && typeof j !== "undefined"){
            this.moveBoardAI(i,j);
        }
    }

    moveBoardAI(i, j) {
        // Make the move for 'o'
        this.gameArr[i][j] = this.gameObj.secondPlayer;
        let cell = document.querySelector(`[data-cellno="${i * 3 + j + 1}"]`);
        cell.innerHTML =  this.drawSymbol(this.gameObj.secondPlayer);
        this.gameTurn++;

        console.log("AI moved to: ", i, j);
        console.log("Game board State:", this.gameArr);

        if (this.gameTurn >= 3 && !this.resultPublished) {
            this.checkWinner();
        }
    }

    checkWinnerForAI() {

        for (let combination of this.winningCombinations) {
            const [a, b, c] = combination;
            if (this.gameArr[a[0]][a[1]] && 
                this.gameArr[a[0]][a[1]] === this.gameArr[b[0]][b[1]] && 
                this.gameArr[a[0]][a[1]] === this.gameArr[c[0]][c[1]]) {
                return this.gameArr[a[0]][a[1]];
            }
        }

        if(this.emptyCells.length === 0)
            return 'tie';
    
        return null;
    }


    /*
    // This is level 1 AI for the game and make a random move on the board.
    boardAILevel1(){
        // Simple AI to make a move
        // let emptyCells = [];
        // for (let i = 0; i < 3; i++) {
        //     for (let j = 0; j < 3; j++) {
        //         if (this.gameArr[i][j] === '') {
        //             emptyCells.push([i, j]);
        //         }
        //     }
        // }

        // if (emptyCells.length === 0) {
        //     return; // No moves left
        // }

        // Randomly select an empty cell
        // let randomIndex = Math.floor(Math.random() * emptyCells.length);
        // let [i, j] = emptyCells[randomIndex];

        // Make the move for 'o'
        this.gameArr[i][j] = this.gameObj.secondPlayer;
        let cell = document.querySelector(`[data-cellno="${i * 3 + j + 1}"]`);
        cell.innerHTML =  this.drawSymbol(this.gameObj.secondPlayer);
        this.gameTurn++;

        console.log("AI moved to: ", i, j);
        console.log("Game board State:", this.gameArr);

        if (this.gameTurn >= 3 && !this.resultPublished) {
            this.checkWinner();
        }
    }
    */    

    // This is Level 2 AI that will block any move by user's wining chance
    boardAILevel2() {
        // Advanced AI to block the player's winning move or make the best move
        let bestMove = null;
        let bestScore = -Infinity;

        const minimax = (board, depth, isMaximizing) => {
            const scores = {
                'x': -1,
                'o': 1,
                'tie': 0
            };

            let result = this.checkWinnerForAI();
            if (result !== null) {
                return scores[result];
            }

            if (isMaximizing) {
                let maxEval = -Infinity;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[i][j] === '') {
                            board[i][j] = 'o';
                            let _eval = minimax(board, depth + 1, false);
                            board[i][j] = '';
                            maxEval = Math.max(_eval, maxEval);
                            if (depth === 0 && _eval > bestScore) {
                                bestScore = _eval;
                                bestMove = { i, j };
                            }
                        }
                    }
                }
                return maxEval;
            } else {
                let minEval = Infinity;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[i][j] === '') {
                            board[i][j] = 'x';
                            let _eval = minimax(board, depth + 1, true);
                            board[i][j] = '';
                            minEval = Math.min(_eval, minEval);
                        }
                    }
                }
                return minEval;
            }
        };

        // const checkWinnerForAI = (board) => {

        //     // for (let combination of this.winningCombinations) {
        //     //     const [a, b, c] = combination;
        //     //     if (board[a[0]][a[1]] && 
        //     //         board[a[0]][a[1]] === board[b[0]][b[1]] && 
        //     //         board[a[0]][a[1]] === board[c[0]][c[1]]) {
        //     //         return board[a[0]][a[1]];
        //     //     }
        //     // }

        //     // let openSpots = 0;
        //     // for (let i = 0; i < 3; i++) {
        //     //     for (let j = 0; j < 3; j++) {
        //     //         if (board[i][j] === '') {
        //     //             openSpots++;
        //     //         }
        //     //     }
        //     // }

        //     if (openSpots === 0) {
        //         return 'tie';
        //     }

        //     return null;
        // };

        minimax(this.gameArr, 0, true);

        if (bestMove) {
            // let { i, j } = bestMove;
            // this.gameArr[i][j] = 'o';
            // let cell = document.querySelector(`[data-cellno="${i * 3 + j + 1}"]`);
            // cell.innerHTML = this.theam.oSymbol();
            // this.playerTurn = 'x';
            // this.gameTurn++;

            // console.log("AI moved to: ", i, j);
            // console.log("Game board State:", this.gameArr);

            // if (this.gameTurn >= 3) {
            //     this.checkWinner();
            // }
            return [bestMove.i, bestMove.j];
        }
    }

    // This is the level 3rd AI it not only blocks the move but also place it's move to wining position
    boardAILevel3() {
        // Expert AI to block the player's winning move and make the best move to win
        let bestMove = null;
        let bestScore = -Infinity;

        const minimax = (board, depth, isMaximizing) => {
            const scores = {
            'x': -1,
            'o': 1,
            'tie': 0
            };

            let result = this.checkWinnerForAI();
            if (result !== null) {
            return scores[result];
            }

            if (isMaximizing) {
            let maxEval = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'o';
                    let _eval = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    maxEval = Math.max(_eval, maxEval);
                    if (depth === 0 && _eval > bestScore) {
                    bestScore = _eval;
                    bestMove = { i, j };
                    }
                }
                }
            }
            return maxEval;
            } else {
            let minEval = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'x';
                    let _eval = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    minEval = Math.min(_eval, minEval);
                }
                }
            }
            return minEval;
            }
        };

        // const checkWinnerForAI = (board) => {
        //     const winningCombinations = [
        //     [ [0, 0], [0, 1], [0, 2] ],
        //     [ [1, 0], [1, 1], [1, 2] ],
        //     [ [2, 0], [2, 1], [2, 2] ],
        //     [ [0, 0], [1, 0], [2, 0] ],
        //     [ [0, 1], [1, 1], [2, 1] ],
        //     [ [0, 2], [1, 2], [2, 2] ],
        //     [ [0, 0], [1, 1], [2, 2] ],
        //     [ [0, 2], [1, 1], [2, 0] ]
        //     ];

        //     for (let combination of winningCombinations) {
        //     const [a, b, c] = combination;
        //     if (board[a[0]][a[1]] && 
        //         board[a[0]][a[1]] === board[b[0]][b[1]] && 
        //         board[a[0]][a[1]] === board[c[0]][c[1]]) {
        //         return board[a[0]][a[1]];
        //     }
        //     }

        //     let openSpots = 0;
        //     for (let i = 0; i < 3; i++) {
        //     for (let j = 0; j < 3; j++) {
        //         if (board[i][j] === '') {
        //         openSpots++;
        //         }
        //     }
        //     }

        //     if (openSpots === 0) {
        //     return 'tie';
        //     }

        //     return null;
        // };

        minimax(this.gameArr, 0, true);

        if (bestMove) {
            // let { i, j } = bestMove;
            // this.gameArr[i][j] = 'o';
            // let cell = document.querySelector(`[data-cellno="${i * 3 + j + 1}"]`);
            // cell.innerHTML = this.theam.oSymbol();
            // this.playerTurn = 'x';
            // this.gameTurn++;

            // console.log("AI moved to: ", i, j);
            // console.log("Game board State:", this.gameArr);

            // if (this.gameTurn >= 3) {
            // this.checkWinner();
            // }
            return [bestMove.i, bestMove.j];
        }
    } 
}