import { useState } from "react";



export default function GameBoard({ handleSelectedPlayer, turns }) {
   


    return (

        <ol id="game-board">
            {turns.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) =>
                     <li key={colIndex}>
                        <button onClick={() => handleSelectedPlayer(rowIndex, colIndex)} disabled={col}>
                    {col}
                    </button></li>)}
                    </ol>
            </li>)}
        </ol>

    );
}