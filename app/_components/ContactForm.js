"use client";

import { useState } from "react";
import { contact } from "../_services/mailjet";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { status, error } = await contact(formData);

    if (status !== 200) {
      setError(error);
    } else {
      setError("");
    }
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return (
    <form
      className="flex flex-col gap-4 bg-bg-primary p-4 md:p-8 rounded-lg border border-border w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm md:text-base text-text-primary font-semibold"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="px-4 py-3 rounded-md bg-white text-text-primary/80 border border-border focus:outline-none"
          value={formData.fullName}
          onChange={(e) => handleChange(e, "fullName")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm md:text-base text-text-primary font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="px-4 py-3 rounded-md bg-white text-text-primary/80 border border-border focus:outline-none"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm md:text-base text-text-primary font-semibold"
        >
          Please tell me about your needs
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="text-sm md:text-base px-4 py-3 rounded-md bg-white text-text-primary/80 border border-border focus:outline-none"
          value={formData.message}
          onChange={(e) => handleChange(e, "message")}
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full px-8 py-4 rounded-lg md:text-lg font-semibold transition bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-text-secondary cursor-pointer"
      >
        Send Message
      </button>
      {error && (
        <p className="text-accent text-center font-semibold">{error}</p>
      )}
    </form>
  );
}

export default ContactForm;
