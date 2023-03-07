
import React from 'react'
import '../styles/Contact.scss'
import { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
    } else {
      setError(false);
      setSuccess(true);
   
    }
  };
  return (
      <div className='contactContainer'>

        <h3>Elakadtál? Nem értesz valamit ? Szeretnél eseményekről ,versenyekről informácíót kapni ? </h3>

        <p>Vedd fel velem a kapcsolatot. </p>

        <form onSubmit={handleSubmit} >
          <div className='error-succes'>
          {error && <div className="error">Minden mező kitöltése kötelező!</div>}
          {success && <div className="success">Az üzenetet sikeresen elküldtük!</div>}
          </div>
         
          <input
            type="text"
            name="name"
            placeholder="Kérlek írd be a neved... "
            onChange={handleChange}
            autoComplete="off"
            value={formData.name}

          />
          <input
            type="email"
            name="email"
            placeholder="Kérlek írd be a e-mail címed.... "
            onChange={handleChange}
            value={formData.email}
            autoComplete="off"

          />
          <textarea
            name="message"
            placeholder="Ide írd az üzeneted : "
            rows="6"
            onChange={handleChange}
            value={formData.message}

          />
          <button type="submit">Küldés</button>

        </form>
      </div>


   
  )
}

export default Contact





      

