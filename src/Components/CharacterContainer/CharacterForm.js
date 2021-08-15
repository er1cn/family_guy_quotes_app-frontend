import React, {useState} from 'react'

export default function CharacterForm(createCharacter) {
    const [character, setCharacter] = useState({ name: "" })
    
    function handleChange(e) {
        const updatedValue = { ...character }
        updatedValue[e.target.name] = e.target.updatedValue
        setCharacter(updatedValue)
    }
     
    function handleSubmit(e) {
        e.preventDefault()
        createCharacter(character)
    }

    return (
        <div>
            <h2>Add Character</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={character.name} onChange={handleChange} />
                <button type="submit">Update Character</button>

            </form>
        </div>
    )
}
