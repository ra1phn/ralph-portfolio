import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "leads"), {
      name: form.name,
      email: form.email,
      message: form.message,
      createdAt: new Date(),
    });

    alert("Message sent successfully!");

    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

  return (
    <section id="contact" className="section-padding">
      <div className="container">

        <h2>Contact Me</h2>
        <p className="subtitle">
          Send a message and I’ll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            <span>Send Message</span>
          </button>

        </form>

      </div>
    </section>
  );
};