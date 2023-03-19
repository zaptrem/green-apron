import React, { useState, useEffect } from "react";

function ChatGPT() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([{ role: "system", 
  
  content: `
  Available Food Near This User:
  [
    {
        "name": "Bananas",
        "price": 0.59,
        "home_store": "Walmart"
    },
    {
        "name": "Milk",
        "price": 3.49,
        "home_store": "Target"
    },
    {
        "name": "Eggs",
        "price": 2.99,
        "home_store": "Walmart"
    },
    {
        "name": "Bread",
        "price": 1.99,
        "home_store": "Wegmans"
    },
    {
        "name": "Cheese",
        "price": 4.99,
        "home_store": "Wegmans"
    },
    {
        "name": "Yogurt",
        "price": 2.49,
        "home_store": "Target"
    },
    {
        "name": "Apples",
        "price": 1.29,
        "home_store": "Trader Joe's"
    },
    {
        "name": "Salmon",
        "price": 9.99,
        "home_store": "Whole Foods"
    },
    {
        "name": "Carrots",
        "price": 0.99,
        "home_store": "Walmart"
    },
    {
        "name": "Butter",
        "price": 3.79,
        "home_store": "Target"
    },
    {
        "name": "Ice cream",
        "price": 4.49,
        "home_store": "Wegmans"
    },
    {
        "name": "Orange juice",
        "price": 2.99,
        "home_store": "Trader Joe's"
    },
    {
        "name": "Chicken breast",
        "price": 5.99,
        "home_store": "Whole Foods"
    },
    {
        "name": "Lettuce",
        "price": 1.49,
        "home_store": "Walmart"
    },
    {
        "name": "Ham",
        "price": 6.49,
        "home_store": "Target"
    },
    {
        "name": "Tomatoes",
        "price": 1.99,
        "home_store": "Trader Joe's"
    },
    {
        "name": "Beef",
        "price": 7.99,
        "home_store": "Whole Foods"
    },
    {
        "name": "Mushrooms",
        "price": 2.49,
        "home_store": "Walmart"
    },
    {
        "name": "Sour cream",
        "price": 2.79,
        "home_store": "Target"
    },
    {
        "name": "Grapes",
        "price": 3.29,
        "home_store": "Wegmans"
    },
    {
        "name": "Tofu",
        "price": 2.99,
        "home_store": "Trader Joe's"
    },
    {
        "name": "Shrimp",
        "price": 8.99,
        "home_store": "Whole Foods"
    },
    {
        "name": "Spinach",
        "price": 1.99,
        "home_store": "Walmart"
    },
    {
        "name": "Bacon",
        "price": 5.49,
        "home_store": "Target"
    },
    {
        "name": "Cake",
        "price": 6.99,
        "home_store": "Wegmans"
    }
    ]
   You are a system that generates dinner plans based on close-to-expiration-date foods available in the above list. If the user asks for SUGGESTIONS, you always respond in the form of JSON lists that contain only meal options (the fancier, more complex, and more items used on the above list the better). If the user asks for a RECIPIE, list all items from the above list required for the meal (and their costs/home stores)` }]);

  const handleUserMessageChange = (event) => {
    // Update user message state
    setUserMessage(event.target.value);
  };

  const handleUserMessageSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Add user message to messages array
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    const myHeaders = new Headers();

    console.log("sending these messages: ", newMessages);

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer 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');
    myHeaders.append('OpenAI-Organization', 'org-2YRtgatLU9cqlyWTHlH86nqp');
    // Call GPT3.5 Turbo chat completion endpoint
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
      }),
    });
    // Check if response is okay
    if (response.ok) {
      // Parse response as JSON data
      const jsonData = await response.json();
      // Get assistant message from choices array
      const assistantMessage = jsonData.choices[0].message.content;

      const newNewMessages = [...newMessages, { role: "assistant", content: assistantMessage }];
      // Add assistant message to messages array
      setMessages(newNewMessages);
      console.log("responded with these messages!")
      console.log(newNewMessages);
      // Clear user message state
      setUserMessage("");
    } else {
      // Throw response as error
      throw response;
    }
  };

  return (
    <div className="chat-interface">
      <form onSubmit={handleUserMessageSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder="Type your message here"
        />
        <button type="submit">Send</button>
      </form>

      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatGPT;