import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



export default function Character({ character, deleteCharacter, updateCharacter, initialDelay=0 }) {
    const [newCharacter, setNewCharacter] = useState({ ...character });
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)

    useEffect(() => {
    const timeout = setTimeout(() => {setRender(true)}, initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])


    function handleChange(e) {
        const updatedValue = { ...newCharacter }
        updatedValue[e.target.name] = e.target.value
        setNewCharacter(updatedValue)
    }

    function toggleEdit() {
        setEditMode(!editMode)
    }
    
    function handleUpdate(e) {
        e.preventDefault()
        updateCharacter(newCharacter)
        setEditMode(false)
    }

    if (!render) {
    return <></>
  }

    return (
      <div className="card">
        <Link to={`/characters/${character.id}`}>
          <p>{character.name}</p>
        </Link>

        {editMode && (
          <>
            <button onClick={() => deleteCharacter(character)}>
              Delete Character
            </button>

            <form onSubmit={handleUpdate}>
              <input
                name="name"
                value={newCharacter.name}
                onChange={handleChange}
              />
              <button type="submit">Update Character</button>
            </form>
          </>
        )}
        <button onClick={toggleEdit}>Edit</button>
      </div>
    );
}
