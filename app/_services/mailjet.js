export async function contact(formData) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        fullName: formData.fullName,
        message: formData.message,
      }),
    });

    const { status, error } = await res.json();

    return { status, error };
  } catch (err) {
    return { status: 500, error: "Something went wrong, please try again." };
  }
}

export async function subscribe(formData) {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        fullName: formData.fullName,
      }),
    });

    const { status, error } = await res.json();

    return { status, error };
  } catch (err) {
    return { status: 500, error: "Something went wrong, please try again." };
  }
}
