import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";
import { allot, derivedFunction, derivedWinner } from "./components/constants";

function App() {
  const [players, setPlayers] = useState({
    X: 'Player1',
    O: 'Player2'
  })
  const [gameTurn, setGameTurn] = useState([]);
  let gameBoard = allot(gameTurn);
  const selectedPlayer = derivedFunction(gameTurn);
  let winner = derivedWinner(gameBoard, players);

  let hasDraw = gameTurn.length === 9 && !winner;


  const handleSelectedPlayer = (rowIndex, colIndex) => {
    setGameTurn((prevTurn) => {
      const currentPlayer = derivedFunction(prevTurn)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn]
      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurn([]);
  }

  function handleNameChange(symbol, name) {
    setPlayers(prev => {
      return {
        ...prev,
        [symbol]: name
      };
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={'player1'} symbol={'X'} isActive={selectedPlayer === 'X'} handleNameChange={handleNameChange} />
          <Player name={"player2"} symbol={'O'} isActive={selectedPlayer === 'O'} handleNameChange={handleNameChange} />
        </ol>
        <GameBoard handleSelectedPlayer={handleSelectedPlayer} turns={gameBoard} />
      </div>
      <Logs gameTurn={gameTurn} />
      {(winner || hasDraw) && <GameOver winner={winner} handleRestart={handleRestart} />}
    </main>
  )
}

export default App
