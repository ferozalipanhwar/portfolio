import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowPopup(false);

    emailjs.sendForm('service_wbvh3zt', 'template_gj1jiek', e.target, 'EfoJKAnY7XtcCt6It')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSent(true);
        setPopupMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }, (error) => {
        console.log('Error sending email:', error.text);
        setIsError(true);
        setPopupMessage('There was an error sending your message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
        setShowPopup(true);
      });
  };

  return (
    <div className={styles.container} id='contact'>
      <div className={styles.contactForm}>
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isLoading}>Send</button>
          {isLoading && <div className={styles.loader}></div>}
        </form>
        {showPopup && (
          <div className={`${styles.popup} ${isSent ? styles.successPopup : styles.errorPopup}`}>
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ContactForm;
