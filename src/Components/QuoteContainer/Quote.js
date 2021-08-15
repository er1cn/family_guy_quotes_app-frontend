import React from 'react';
import StarRating from '../StarRating';

export default function Quote({quote}) {
    return (
        <div className="card">
            <StarRating />
            <p>Quote: {Quote.text}</p>
            
        </div>
    );
}
