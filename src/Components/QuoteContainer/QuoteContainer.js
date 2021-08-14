import React, { useState,useEffect }  from 'react'

// const quotesData = [
//   {
//     id: 1,
//     text: "Hey, don't try to take this away from me. This is the only thing I've ever been good at. Well, this and timing my farts to a thunderstorm.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 2,
//     text: "Joe, gag on my fat dauber.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 3,
//     text: "I am so not competitive. In fact, I am the least non-competitive. So I win.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 4,
//     text: "Isn’t ‘bribe’ just another word for ‘love’?",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 5,
//     text: "Amazing. One second of a stranger's voice on a phone, and you've got full Bollywood.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 6,
//     text: "You know, this is great guys. Drinking and eating garbage. I'm glad we all took a mental health day.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 7,
//     text: "Isn’t ‘bribe’ just another word for ‘love’?",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 8,
//     text: "People in love can overcome anything.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 9,
//     text: "It’s Peanut Butter Jelly Time.",
//     rating: null,
//     character_id: null,
//   },
//   {
//     id: 10,
//     text: "You know, this is great guys. Drinking and eating garbage. I'm glad we all took a mental health day.",
//     rating: null,
//     character_id: null,
//   },
// ];

  export default function QuoteContainer() {
    const [quotes, setQuotes] = useState([]);
    const quotesList = quotes.map(quotes => <li>{quotes.text}</li>)
    
    useEffect(() => {
      fetch("http://localhost:4000/quotes")
        .then((r) => r.json())
        .then((quotesRes) => setQuotes(quotesRes));
    }, []);


    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotesList}
            </ul>
        </div>
    )
}
