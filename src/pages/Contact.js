import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, { name, email, subject, message });
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to send message. Please try again later.');
    }
  }

  return (
    <div className="container bg-white py-5" id="contact">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Contact Me</h2>
        </div>
        <div className="col-12">
          <div className="contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="control-group col-sm-6">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="control-group">
                <textarea
                  className="form-control py-3 px-4"
                  rows="5"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
