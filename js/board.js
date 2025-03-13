// Board related activity - handling player state, board state, game logic, etc. 
class Board {

    gameArr = [['','',''],['','',''],['','','']];
    playerTurn = '';
    gameTurn = 0;
    theam = {};

    constructor(gameObj) {
        this.gameObj = gameObj;
    }

    init() {

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
        
        // TODO: IMplement system to assign values to the tic tac toe cell. 
        let i = Math.floor(cellNo/3.0);
        let j = cellNo%3;
        let oldPlayer = this.playerTurn;

        console.log("I and J ", i, j);

        switch(this.playerTurn){
            case 'x' :
                this.gameArr[i][j] = 'x';
                cell.innerHTML = this.theam.xSymbol();
                this.playerTurn = 'o';
                break;
            
            case 'o' :
                this.gameArr[i][j] = 'o';
                cell.innerHTML = this.theam.oSymbol();
                this.playerTurn = 'x'; 
                break;
            default:
                console.error('No player turn assigende');
                return
        }
        this.gameTurn++;

        console.log("Game board State:" ,this.gameArr)

        if(this.gameTurn < 3){
            return;
        }

        this.checkWinner();
    }

    // Function to check for the winner
    checkWinner() {
        const winningCombinations = [
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

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.gameArr[a[0]][a[1]] && 
            this.gameArr[a[0]][a[1]] === this.gameArr[b[0]][b[1]] && 
            this.gameArr[a[0]][a[1]] === this.gameArr[c[0]][c[1]]) {
            console.log(`Player ${this.gameArr[a[0]][a[1]]} wins!`);

            // Pop out the message
            
            return;
            }
        }

        if (this.gameTurn === 9) {
            console.log("It's a draw!");
        }
    }

    updateBoard() {
        
    }
}