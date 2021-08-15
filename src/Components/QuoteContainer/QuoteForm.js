import React, { useState } from 'react';

export default function QuoteForm({ createQuote }) {
    const [formData, setFormData] = useState({ quote: "" })

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
      e.preventDefault();
      createQuote(formData);
      setFormData({ quote: "" });
    }




    return (
      <form>
        <label>Quote: </label>
            <input onChange={handleChange} quote="quote" value={formData.quote} />
            <button onClick={handleSubmit}>Add Quote</button>
      </form>
    );
}
