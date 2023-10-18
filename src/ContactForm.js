import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to a server.
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2 className='f_head'>Contact Form</h2>
      <form onSubmit={handleSubmit} className='form11'>
        <div>
          <label htmlFor="name" className='f_name'>Name:</label>
          <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="custom-input" 
          />
          </div>
        </div>
        <div className='ema'>
          <label htmlFor="email" className='f_name'>Email:</label>
          
        </div>
        <div>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="custom-textarea"
          />
        </div>
        <div>
          <label htmlFor="message" className='f_name'>Message:</label>
          <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="custom-message"
          />
          </div>
        </div>
        <button type="submit" className="custom-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
