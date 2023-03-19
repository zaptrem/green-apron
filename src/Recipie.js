import React from 'react';

function Recipe() {
  // Define an array of steps for the recipe
  const steps = [
    "Heat a large saucepan over a medium heat. Add a tablespoon of olive oil and once hot add 400g of beef mince and a pinch of salt and pepper. Cook the mince until well browned over a medium-high heat (be careful not to burn the mince. It just needs to be a dark brown colour). Once browned, transfer the mince to a bowl and set aside.",
    "Add another tablespoon of oil to the saucepan you browned the mince in and turn the heat to medium. Add one diced onion and a pinch of salt and fry gently for 5-6 minutes, or until softened and translucent. Add two chopped garlic cloves and cook for another 2 minutes.",
    "Add 100g of grated carrot and 100g of chopped mushrooms then pour the mince and any juices in the bowl back into the saucepan. Stir well to mix.",
    "Add two 400g tins of chopped tomatoes, 400ml of beef stock (made from stock cube), two tablespoons of tomato ketchup or purée, one tablespoon of Worcestershire sauce, and salt and pepper to taste³. Bring to a simmer and then reduce the temperature to simmer gently for 45 minutes, or until the sauce is thick and rich. Taste and adjust the seasoning as necessary.",
    "When ready to cook the spaghetti, heat a large pot of water with a pinch of salt. Cook 400g of dried spaghetti according to the packet instructions. Once cooked through, drain well.",
    "Serve by mixing some sauce with spaghetti on each plate or by placing spaghetti on plates first then spooning over some sauce on top⁴. Sprinkle with grated cheese if desired."
  ];

  // Define an inline style object for font size
  const style = {
    fontSize: '16pt'
  };

  // Return JSX elements using map function
  return (
    <div>
      <h4>Spaghetti Bolognese</h4>
      <ul>
        {steps.map((step, index) => (
          <li key={index} style={style}>{step}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default Recipe;