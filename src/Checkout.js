import React from "react";
import { Card, Button } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";
import FakeLoader from "./FakeLoader";
import Recipe from "./Recipie";

// A custom hook that fetches an image URL based on a query from the Unsplash API
const useUnsplashImage = (query) => {
  // Use React hooks to store and update the image URL, loading state and error state in state variables
  const [image, setImage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Use React useEffect hook to fetch the image URL when the query changes
  React.useEffect(() => {
    // Create an abort controller to cancel the fetch request
    const controller = new AbortController();
    const signal = controller.signal;

    // Define an async function that fetches the image URL
    const fetchImage = async () => {
      try {
        // Set loading state to true and error state to null
        setLoading(true);
        setError(null);

        // Replace YOUR_ACCESS_KEY with your own access key from Unsplash
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=DiqlGjMH__LcCvm8f-CO8Sg39gv_AZ1jFBeG5i8VhUE`,
          { signal }
        );
        const data = await response.json();
        // Set image state to the first image result or a default placeholder if none found
        setImage(
          data.results.length > 0
            ? data.results[0].urls.small
            : "https://via.placeholder.com/150"
        );
      } catch (error) {
        // If the request was aborted, do nothing
        if (error.name === "AbortError") return;
        // Otherwise, set error state to the error message
        setError(error.message);
      } finally {
        // Set loading state to false
        setLoading(false);
      }
    };

    // Invoke the async function
    fetchImage();

    // Return a cleanup function that aborts the fetch request
    return () => controller.abort();
  }, [query]);

  // Return an object with image, loading and error states
  return { image, loading, error };
};

// A component to display a single item
const Item = ({ title, price, store }) => {
  // Use custom hooks to get image and logo URLs based on title and store queries from Unsplash API
  const {
    image: itemImage,
    loading: itemLoading,
    error: itemError,
  } = useUnsplashImage(title);

  // Define a function to get the logo URL based on the store name
  const getLogoURL = (store) => {
    switch (store) {
      case "Trader Joe's":
        return "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/8d096c3f6ce042d899912768e82955cc";
      case "Walmart":
        return "http://www.clipartbest.com/cliparts/KTn/oqK/KTnoqKqGc.jpeg";
      case "Wegmans":
        return "http://edge.rit.edu/content/R12700/public/Wegmans.jpg";
      default:
        return null;
    }
  };

  // Get the logo URL from the function
  const logoURL = getLogoURL(store);

  return (
    <Card
      style={{
        display: "flex",
        alignItems: "space-between",
        justifyContent: "space-between",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        cursor: `pointer`,
        height: "75px", // Add this line to set the height of the card to 300px
      }}
    >
      {/* Display a clip loader if item image is loading */}
      {itemLoading && <PulseLoader color="#000000" />}
      {/* Display an error message if item image failed to load */}
      {itemError && <p>Failed to load item image</p>}
      {/* Display item image if available */}
      {itemImage && (
        <img
          src={itemImage}
          alt={store}
          style={{ height: "75px", width: "auto" }}
        />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
      {/* Display logo image if available */}
      {logoURL && (
        <img
          src={logoURL}
          alt={store}
          style={{ width: "75px", height: "auto", opacity: "0.5" }}
        />
      )}
    </Card>
  );
};
const Checkout = ({ items }) => {
  // Calculate the total price by summing up the prices of all items
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Calculate the discounted price by multiplying the total price by 0.5
  const discountedPrice = totalPrice * 0.5;

  // Define a custom style object for the button
  const buttonStyle = {
    backgroundColor: "dodgerblue", // Set the background color to blue
    color: "white", // Set the text color to white
    fontSize: "24px", // Set the font size to 24px
    padding: "15px", // Set the padding to 15px
    borderRadius: "10px", // Set the border radius to 10px
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer", // Change the cursor to pointer when hovering over the button
    borderWidth: "0px", // Remove the border
  };

  // Define a custom style object for the original price text
  const originalPriceStyle = {
    textDecoration: "line-through", // Add a line through the text
    color: "gray", // Change the text color to gray
    fontSize: "18px", // Change the font size to 18px
  };

  // Define a custom style object for the discounted price text
  const discountedPriceStyle = {
    color: "green", // Change the text color to green
    fontSize: "24px", // Change the font size to 24px
    fontWeight: "bold", // Make the text bold
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Apply the custom style object to the original price text */}
      <p style={originalPriceStyle}>Total Price: ${totalPrice}</p>
      {/* Apply the custom style object to the discounted price text */}
      <p style={discountedPriceStyle}>Discounted Price: ${discountedPrice}</p>
      {/* Apply the custom style object to the button */}
      <Button variant="primary" size="lg" style={buttonStyle}>
        Checkout
      </Button>
      {/* Div with 500 pts of margin at the top */}
      <FakeLoader>
        <Recipe />
      </FakeLoader>
    </div>
  );
};

// A component to display the checkpoint page
export default () => {
  // Some dummy data for the items with store field added
  const items = [
    {
      title: "Olive oil",
      price: 3,
      quantity: 2,
      store: "Walmart",
    },
    {
      title: "Beef mince",
      price: 8,
      quantity: 1,
      store: "Wegmans",
    },
    {
      title: "Onion",
      price: 0.5,
      quantity: 1,
      store: "Trader Joe's",
    },
    {
      title: "Garlic",
      price: 0.75,
      quantity: 2,
      store: "Trader Joe's",
    },
    {
      title: "Carrot",
      price: 0.25,
      quantity: 1,
      store: "Walmart",
    },
    {
      title: "Mushroom",
      price: 2,
      quantity: 1,
      store: "Wegmans",
    },
    {
      title: "Chopped tomatoes",
      price: 1.5,
      quantity: 2,
      store: "Trader Joe's",
    },
    {
      title: "Beef stock cube",
      price: 0.75,
      quantity: 1,
      store: "Walmart",
    },
    {
      title: "Tomato ketchup or purée",
      price: 2,
      quantity: 1,
      store: "Wegmans",
    },
    {
      title: "Worcestershire sauce",
      price: 3,
      quantity: 1,
      store: "Trader Joe's",
    },
    {
      title: "Spaghetti",
      price: 1.5,
      quantity: 1,
      store: "Walmart",
    },
    {
      title: "Cheese (optional)",
      price: 4,
      quantity: 1,
      store: "Wegmans",
    },
  ];
  // alignContent: "f"
  return (
    <div style={{ display: "flex ", flexDirection: "row" }}>
      {/* Map each item to an Item component */}
      <div style={{ display: "flex ", flexDirection: "column" }}>
        {items.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            price={item.price}
            store={item.store}
          />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Checkout items={items} />
      </div>
      {/* Render the Checkout component with the items as props */}
    </div>
  );
};
