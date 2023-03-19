// Import the OpenAI module
import OpenAI from 'openai-api';

// Initialize an instance with your API key
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Define an async function that takes a query as input and returns a response from GPT3
async function gpt3(query) {
  // Set some parameters for the request
  const params = {
    engine: 'davinci', // The name of the engine to use
    prompt: query, // The query to send to GPT3
    max_tokens: 100, // The maximum number of tokens to generate
    temperature: 0.5, // The randomness of the output
    stop: '\n', // The token to stop at
  };

  // Make a request to GPT3 and get the response
  const response = await openai.complete(params);

  // Return the text of the response
  return response.data.choices[0].text;
}

// Export the function as a default export
export default gpt3;