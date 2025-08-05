"use client";

import { useState } from "react";
import { subscribe } from "../_services/mailjet";

function LeadMagnet() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { status, error } = await subscribe(formData);

    if (status !== 200) {
      setError(error);
    } else {
      setError("");
    }
  };

  return (
    <form
      className="md:w-xl space-y-4 bg-bg-secondary text-text-primary rounded-b-lg px-4 py-2 md:px-8 md:py-4"
      onSubmit={handleSubmit}
    >
      <label className="text-xl">Full Name</label>
      <input
        className="focus:outline-none border rounded-md border-border px-4 py-2 w-full"
        value={formData.fullName}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, fullName: e.target.value };
          })
        }
      />
      <label className="text-xl">Email</label>
      <input
        className="focus:outline-none border rounded-md border-border px-4 py-2 w-full"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, email: e.target.value };
          })
        }
      />
      <button className="w-full text-center px-4 py-2 md:px-8 md:py-4 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-text-secondary transition font-semibold cursor-pointer">
        Get My FREE WORKOUT
      </button>
      <p className="text-center text-sm">
        Sign up to also receive weekly fitness updates from me on your email.
      </p>
      {error && (
        <p className="text-accent text-center font-semibold">{error}</p>
      )}
    </form>
  );
}

export default LeadMagnet;
