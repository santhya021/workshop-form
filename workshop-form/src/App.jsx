import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!form.name || !form.email || !form.phone || !form.college) {
      alert("Please fill all fields");
      return;
    }

    console.log(form);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Workshop Registration</h1>

      {submitted ? (
        <h2 style={{ color: "green" }}>✅ Successfully Registered!</h2>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "inline-block",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;