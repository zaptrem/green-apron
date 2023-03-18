import React, { useState } from "react";

// A custom hook to handle form inputs
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

// The form component
function MealPlannerForm(props) {
  // Form inputs
  const people = useFormInput(1); // Number of people
  const diet = useFormInput(""); // Dietary restrictions
  const mood = useFormInput(""); // Preferences
  const budget = useFormInput(0); // Budget
  const priority = useFormInput("price"); // Price or distance

  // Form submission handler
  function handleSubmit(e) {
    e.preventDefault();
    // Call the parent component's function with the form data
    props.onSubmit({
      people: people.value,
      diet: diet.value,
      mood: mood.value,
      budget: budget.value,
      priority: priority.value,
    });
  }

  // Define some style objects for convenience
  const formStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "20px auto",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const divStyle = {
    margin: "10px",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const labelStyle = {
    fontWeight: "bold",
    backgroundColor: "#FFFFFF"

  };

  const inputStyle = {
    padding: "5px",
    border: "1px solid #999",
    borderRadius: "5px",
  };

  const selectStyle = {
    ...inputStyle,
    width: "100%",
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#00a0d2",
    color: "#000000",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#008fb3",
  };

  const buttonFocusStyle = {
    ...buttonHoverStyle,
    outline: "3px solid #00e6ff",
  };

  // Use state to toggle button styles on hover and focus events

  const [buttonHover, setButtonHover] = useState(false);
  const [buttonFocus, setButtonFocus] = useState(false);

  function handleButtonMouseEnter() {
    setButtonHover(true);
  }

  function handleButtonMouseLeave() {
    setButtonHover(false);
  }

  function handleButtonFocus() {
    setButtonFocus(true);
  }

  function handleButtonBlur() {
    setButtonFocus(false);
  }

  // Choose the appropriate button style based on state

  let currentButtonStyle = buttonStyle;

  if (buttonHover) {
    currentButtonStyle = buttonHoverStyle;
  }

  if (buttonFocus) {
    currentButtonStyle = buttonFocusStyle;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={divStyle}>
        <label htmlFor="people" style={labelStyle}>
          How many people do you need to feed?
        </label>
        <input
          id="people"
          type="number"
          min="1"
          {...people}
          style={inputStyle}
        />
      </div>
      <div style={divStyle}>
        <label htmlFor="diet" style={labelStyle}>
          Do you have any dietary restrictions?
        </label>
        <input
          id="diet"
          type="text"
          placeholder="e.g. vegan, gluten-free"
          {...diet}
          style={inputStyle}
        />
      </div>
      <div style={divStyle}>
        <label htmlFor="mood" style={labelStyle}>
          What are you in the mood for today?
        </label>
        <input
          id="mood"
          type="text"
          placeholder="e.g. pizza, salad, sushi"
          {...mood}
          style={inputStyle}
        />
      </div>
      <div style={divStyle}>
        <label htmlFor="budget" style={labelStyle}>
          What is your budget?
        </label>
        <input
          id="budget"
          type="number"
          min="0"
          step="0.01"
          {...budget}
          style={inputStyle}
        />
      </div>
      <div style={divStyle}>
        <label htmlFor="priority" style={labelStyle}>
          Do you want to prioritize price or travel distance?
        </label>
        <select id="priority" {...priority} style={selectStyle}>
          <option value="price">Price</option>
          <option value="distance">Distance</option>
        </select>
      </div>
      <button
        type="submit"
        style={currentButtonStyle}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onFocus={handleButtonFocus}
        onBlur={handleButtonBlur}
      >
        Find me a meal
      </button>
    </form>
  );
}

export default MealPlannerForm;
