import React, { useState } from "react";

export default function Player({ name, symbol, isActive, handleNameChange }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(null);

    const handleClick = () => {
        setIsEditing(editing => !editing);

        if(isEditing)
        handleNameChange(symbol,playerName)
    }

    let playerNames = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerNames = <input type="text" value={playerName} required onChange={(event) => { handleChange(event.target.value) }} />
    }

    const handleChange = (value) => {
        setPlayerName(value)
    }

    return (

        <li className={isActive?'active':undefined}>
            <span className="player">
                {playerNames}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>
                {isEditing ?
                    'Save' : 'Edit'}</button>
        </li>
    );
}