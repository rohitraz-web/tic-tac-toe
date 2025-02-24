// Board related activity - handling player state, board state, game logic, etc. 
class Board {

    gameArr = [['','',''],['','',''],['','','']];
    playerTurn = '';
    gameTurn = 0;
    theam = {};

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
                return;
        }
        this.gameTurn++;

        console.log("Game board State:" ,this.gameArr)

        if(this.gameTurn < 3){
            return;
        }

        this.checkWinner();
    }

    checkWinner() {

    }

    updateBoard() {
        
    }
}