import { WINNING_COMBINATIONS } from "./winningCombo";



const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  export const allot = (gameTurn)=>{
    let gameBoard = [...initialGameBoard.map((array=>[...array]))];
  
    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
  
        gameBoard[row][col] = player;
    }
    return gameBoard;
    
  }
  
  export const derivedWinner = (gameBoard,players)=>{
    let winner = null;
    for(const combination of WINNING_COMBINATIONS){
     const firstSymbol = gameBoard[combination[0]?.row][combination[0]?.column];
     const secondSymbol = gameBoard[combination[1]?.row][combination[1]?.column];
     const thirdSymbol = gameBoard[combination[2]?.row][combination[2]?.column];
     if(firstSymbol && firstSymbol===secondSymbol && firstSymbol===thirdSymbol){
       winner = players[firstSymbol];
     }
    }
    return winner;
  }
  
 export const derivedFunction =(gameTurn)=>{
    let currentPlayer = 'X';
    if (gameTurn?.length > 0 && gameTurn[0].player === 'X') {
      currentPlayer = "O";
    }
    return currentPlayer;
  }