import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="mb-lg">
      <form className="color-form" onSubmit={handleSubmit}>
        <h4>Color Generator</h4>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#008080"
        />
        <button className="btn" style={{ backgroundColor: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
