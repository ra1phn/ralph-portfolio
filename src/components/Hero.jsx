import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="section-padding hero">
      <div className="container">
        
        <h1>Need a Website That Brings You Clients?</h1>

        <p className="subtitle">
          I build modern, mobile-friendly websites for businesses in Nairobi that attract customers and grow your revenue.
        </p>

        <div className="hero-buttons">
          <a href="https://wa.me/254XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp">
            Get Your Website on WhatsApp
          </a>
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
        </div>

        <p className="trust-text">
          Trusted by businesses in Nairobi • Fast delivery • Affordable pricing
        </p>

      </div>
    </section>
  );
};
