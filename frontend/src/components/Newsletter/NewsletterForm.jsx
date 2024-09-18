import React, { useState } from 'react';
import './NewsletterForm.css'
import { assets } from '../../assets/assets';

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    genre: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Simplesmente exibir a mensagem de sucesso
  };

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-image">
        <img src={assets.newsletter_img} alt="Inscreva-se na nossa newsletter" />
      </div>
      <div className="newsletter-content">
        <h2>Inscreva-se na nossa Newsletter<br/>e fique por dentro das novidades!</h2>
        {/* <h4>e fique por dentro das novidades!</h4> */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Digite seu telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">Selecione seu gênero literário preferido</option>
              <option value="infantil">Infantil</option>
              <option value="romance">Romance</option>
              <option value="fantasia">Fantasia</option>
              <option value="terror">Terror</option>
              <option value="suspense">Suspense</option>
              <option value="outros">Outros</option>
            </select>
            <button type="submit">Finalizar a minha inscrição!</button>
          </form>
        ) : (
          <p className="success-message">Obrigado por se inscrever! Você receberá nossas novidades em breve.</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
