import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditing] = useState(false);
  function editHandler() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        {!isEditting ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
