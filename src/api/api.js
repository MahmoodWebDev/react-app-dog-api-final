// Import the axios library for making HTTP requests
import axios from "axios";

// Create an axios instance with the Dog API base URL
const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

// Function to fetch all dog breeds from the API
export const fetchBreeds = async () => {
  try {
    const response = await api.get("/breeds/list/all");
    return response.data.message; // Return the breeds data from the response
  } catch (error) {
    console.error(error); // Log any errors that occur
    return []; // Return an empty array in case of an error
  }
};

// Function to fetch images for a specific breed from the API
export const fetchBreedImages = async (breed) => {
  try {
    if (!breed) {
      throw new Error("Invalid breed"); // Throw an error if the breed parameter is empty
    }

    let endpoint = breed;

    if (breed.indexOf(" ") >= 0) {
      const breedParts = breed.split(" ");
      endpoint = `${breedParts[1]}/${breedParts[0]}`; // Construct the endpoint based on the breed name
    }

    const response = await api.get(`/breed/${endpoint}/images`);
    return response.data.message; // Return the image data from the response
  } catch (error) {
    console.error(error); // Log any errors that occur
    return []; // Return an empty array in case of an error
  }
};
