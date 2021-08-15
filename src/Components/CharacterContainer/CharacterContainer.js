import React, { useState,useEffect } from "react";
import { BASE_URL } from '../Constraints/index';
import Character from "./Character";


export default function CharacterContainer() {
    const [characters, setCharacters] = useState(null);
    // const charactersList = characters.map(character => <li>{character.name}</li>);

    useEffect(() => {
        fetch(BASE_URL + 'characters')
          .then(r => r.json())
                .then(charactersRes => setCharacters(charactersRes));
    }, [])

    function populateCharacters() {
        return characters.map(
            character => <Character character={character}
                updateCharacter={updateCharacter}
                deleteCharacter={deleteCharacter}
                key={character.id} />)
    }

    function createCharacter(character) {
        fetch(BASE_URL + 'characters', {
            method: "POST",
            body: JSON.stringify(character),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => setCharacters([...characters,json]))
    }







    
    function deleteCharacter(character) {
        fetch(BASE_URL + 'characters/' + character.id, {
            method: "DELETE"
        })
        const newCharacters = characters.filter(c => c.id !== character.id)
        setCharacters(newCharacters)
    }

    function updateCharacter(character) {
        fetch(BASE_URL + 'characters/' + character.id, {
            method: "UPDATE",
            body: JSON.stringify(character)
        })

        const newCharacters = characters.map(c => {
            if (c.id === character.id) {
                c = character
            }
        })
        setCharacters(newCharacters)
    }
     








    return (
        <div>
            <h1>Characters</h1>
            {/* <ul>
               {charactersList} 
            </ul> */}
            {characters && populateCharacters()}
        </div>
    )    
}
