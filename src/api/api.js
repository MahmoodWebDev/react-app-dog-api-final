import axios from "axios";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const fetchBreeds = async () => {
  try {
    const response = await api.get("/breeds/list/all");
    return response.data.message;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchBreedImages = async (breed) => {
  try {
    if (!breed) {
      throw new Error("Invalid breed");
    }

    let endpoint = breed;

    if (breed.indexOf(" ") >= 0) {
      const breedParts = breed.split(" ");
      endpoint = `${breedParts[1]}/${breedParts[0]}`;
    }

    const response = await api.get(`/breed/${endpoint}/images`);
    return response.data.message;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// // Import axios for making HTTP requests
// import axios from "axios";

// // Create axios instance with Dog API base URL
// const api = axios.create({
//   baseURL: "https://dog.ceo/api",
// });

// // Function to fetch all dog breeds
// export const fetchBreeds = async () => {
//   try {
//     const response = await api.get("/breeds/list/all");
//     return response.data.message;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// // Function to fetch images for a specific breed
// export const fetchBreedImages = async (breed) => {
//   try {
//     let endpoint = "";

//     if (breed.indexOf(" ") >= 0) {
//       endpoint = breed.split(" ")[1] + "/" + breed.split(" ")[0];
//     } else {
//       endpoint = breed;
//     }

//     const response = await api.get(`/breed/${endpoint}/images`);
//     return response.data.message;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
