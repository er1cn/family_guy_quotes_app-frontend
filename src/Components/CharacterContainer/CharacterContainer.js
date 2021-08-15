import React, { useState,useEffect } from "react";
import { BASE_URL } from '../Constraints/index';
import Character from "./Character";
import CharacterForm from "./CharacterForm";


export default function CharacterContainer() {
    const [characters, setCharacters] = useState(null);
    
    //Read
    useEffect(() => {
        fetch(BASE_URL + 'characters')
          .then(r => r.json())
                .then(charactersRes => setCharacters(charactersRes));
    }, [])

    function populateCharacters() {
        return characters.map(character => <Character character={character} deleteCharacter={deleteCharacter} updateCharacter={updateCharacter} key={character.id}/>)
            
    }
    
    //Create
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



     //Delete
    
    function deleteCharacter(character) {
        fetch(BASE_URL + 'characters/' + character.id, {
            method: "DELETE"
        })
        const newCharacters = characters.filter(c => c.id !== character.id)
        setCharacters(newCharacters)
    }

    //Update
 
    function updateCharacter(character) {
        fetch(BASE_URL + 'characters/' + character.id, {
            method: "PATCH",
            body: JSON.stringify(character),
            Headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })

        const newCharacters = characters.map(c => {
            if (c.id === character.id) {
                c = character
            }
            return c
        })
        setCharacters(newCharacters)
    }
     
    return (
        <div>
            <h1>Characters</h1>
            {characters && populateCharacters()}
            <CharacterForm createCharacter={createCharacter} />
        </div>
    )    
}
