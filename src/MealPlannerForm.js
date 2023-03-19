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
  const people = useFormInput(4); // Number of people
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="people">How many people do you need to feed?</label>
        <input id="people" type="number" min="1" {...people} />
      </div>
      <div>
        <label htmlFor="diet">Do you have any dietary restrictions?</label>
        <input id="diet" type="text" placeholder="e.g. vegan, gluten-free" {...diet} />
      </div>
      <div>
        <label htmlFor="mood">What are you in the mood for today?</label>
        <input id="mood" type="text" placeholder="e.g. pizza, salad, sushi" {...mood} />
      </div>
      <div>
        <label htmlFor="budget">What is your budget?</label>
        <input id="budget" type="number" min="0" step="0.01" {...budget} />
      </div>
      <div>
        <label htmlFor="priority">Do you want to prioritize price or travel distance?</label>
        <select id="priority" {...priority}>
          <option value="price">Price</option>
          <option value="distance">Distance</option>
        </select>
      </div>
      <button type="submit">Find me a meal</button>
    </form>
  );
}

export default MealPlannerForm;