import React, { useState,useEffect } from "react";
import { BASE_URL } from '../Constraints/index';
import Character from "./Character";
import CharacterForm from "./CharacterForm";
import '../Styles/CharacterContainer.css'


export default function CharacterContainer() {
    const [characters, setCharacters] = useState(null);
    
    //Read
    useEffect(() => {
        fetch(BASE_URL + 'characters')
          .then(r => r.json())
                .then(json => setCharacters(json));
    }, [])

    function populateCharacters() {
        return characters.map((character, idx) => (
            <Character character={character} deleteCharacter={deleteCharacter} updateCharacter={updateCharacter} key={character.id} />)
            
        );
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
            .then(json => setCharacters([...characters, json]));
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
        });

        const newCharacters = characters.map(c => {
            if (c.id === character.id) {
                c = character
            }
            return c;
        })
        setCharacters(newCharacters)
    }
     
    return (
      <div>
        <h2 className="character-header">All Characters</h2>
        <div className="character-container">{characters && populateCharacters()}</div>

        <CharacterForm createCharacter={createCharacter} />
      </div>
    );    
}
