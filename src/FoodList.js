import React, { useState } from "react";

const meals = [
  {
    name: "Spaghetti Bolognese",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg",
    description:
      "A classic Italian dish of spaghetti pasta with a rich tomato and meat sauce.",
    extendedDescription: "PLACEHOLDER TEXT",
  },
  {
    name: "Chicken Tikka Masala",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg",
    description:
      "A popular Indian dish of roasted chicken pieces in a creamy and spicy curry.",
    extendedDescription: "PLACEHOLDER TEXT",
  },
  {
    name: "Salmon Teriyaki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/22nd_June_2012_Teriyaki_Duck.jpg",
    description:
      "A Japanese dish of grilled or baked salmon fillets glazed with a sweet and savory soy sauce.",
    extendedDescription: "PLACEHOLDER TEXT",
  },
];

const MealItem = ({ meal }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        padding: showMore ? "20px" : "10px",
        borderRadius: showMore ? "20px" : "10px",
        boxShadow: showMore
          ? `0 8px 16px rgba(0,0,0,0.2), inset 0 -8px 16px rgba(255,255,255,0.1)`
          : `0 4px 8px rgba(0,0,0,0.1)`,
        cursor: showMore ? "" : `pointer`,
        transitionDuration: "300ms",
      }}
      onClick={toggleShowMore}
    >
      <img src={meal.image} alt={meal.name} style={{
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '10px'
      }} />
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "18px",
          }}
        >
          {meal.name}
        </h3>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
          }}
        >
          {meal.description}
        </p>
        {showMore && (
          <p
            style={{
              margin: "10px",
              fontSize: "12px",
              color: "#888",
            }}
          >
            {meal.extendedDescription}
          </p>
        )}
      </div>
    </div>
  );
};

const MealList = () => {
  return (
    <div
      style={{
        width: "400px",
      }}
    >
      {meals.map((meal) => (
        <MealItem key={meal.name} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
