import React, {useState} from 'react'

export default function Character({ character, deleteCharacter, updateCharacter }) {
    const [newCharacter, setNewCharacter] = useState({ ...character })

    function handleChange(e) {
        const updatedValue = { ...newCharacter }
        updatedValue[e.target.name] = e.target.value
        setNewCharacter(updatedValue)
    }

    function handleUpdate(e) {
        e.preventDefault()
        updateCharacter(newCharacter)
    }
    





    return (
        <div>
            <br />
            <p>{character.name}</p>
            <button onClick={() => deleteCharacter(character)}>Delete Character</button>

            <form onSubmit={(handleUpdate)}>
                <input name="name" value={newCharacter.name} onChange={handleChange} />
                <button type="submit">Update Character</button>

            </form>
            <br />     
        </div>
    )
}
