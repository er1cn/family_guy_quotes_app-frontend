import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../Constraints/index';
import Quote from '../QuoteContainer/Quote';
import QuoteForm from '../QuoteContainer/QuoteForm';
import StarRating from '../StarRating';


export default function CharacterQuotes() {
    const [character, setCharacter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "characters/" + id)
      .then((res) => res.json())
      .then((json) => setCharacter(json));
  }, [id]);
    
   

  function createQuote(CharacterQuotes) {
    const newQuote = {
      ...CharacterQuotes,
      character_id: id,
    };

    fetch(BASE_URL + "/quotes", {
      method: "POST",
      body: JSON.stringify(newQuote),
    })
      .then((res) => res.json())
      .then((json) => {
        const newCharacter = {
          ...character,
          quotes: [...character.quotes, json],
        };
        setCharacter(newCharacter);
      });
  }

  return (
    <div>
      {character && (
        <>
          <p>character Name: {character.name}</p>
          <StarRating />
          <h3>Quotes</h3>
          <h3>Add new character </h3>
          <QuoteForm createQuote={createQuote} />
        </>
      )}
    </div>
  );
}