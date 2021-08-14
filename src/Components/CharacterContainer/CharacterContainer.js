import React, { useState,useEffect } from "react";

// const charactersData = [
//   {
//     id: 1,
//     name: "Fouad",
//   },
//   {
//     id: 2,
//     name: "Francis Griffin",
//   },
//   {
//     id: 3,
//     name: "Cleveland Brown",
//   },
//   {
//     id: 4,
//     name: "Carl",
//   },
//   {
//     id: 5,
//     name: "Joyce Kinney",
//   },
//   {
//     id: 6,
//     name: "Diane Simmons",
//   },
//   {
//     id: 7,
//     name: "Horace",
//   },
//   {
//     id: 8,
//     name: "Thelma Griffin",
//   },
//   {
//     id: 9,
//     name: "Brian Griffin",
//   },
//   {
//     id: 10,
//     name: "Mayor Adam West",
//   },
// ];


export default function CharacterContainer() {
    const [characters, setCharacters] = useState([]);
    const charactersList = characters.map(character => <li>{character.name}</li>);

    useEffect(() => {
        fetch('http://localhost:4000/characters')
          .then(r => r.json())
                .then(charactersRes => setCharacters(charactersRes));
  }, [])

    return (
        <div>
            <h1>Characters</h1>
            <ul>
               {charactersList} 
            </ul>
        </div>
    )    
}
