import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a new context
export const BreedContext = createContext();

// Create a provider component
export const BreedProvider = ({ children }) => {
  // Define the state variables
  const [breeds, setBreeds] = useState([]);
  const [favoriteImages, setFavoriteImages] = useState([]);

  // Create functions to update the state
  const updateBreeds = (newBreeds) => {
    setBreeds(newBreeds);
  };

  const updateFavoriteImages = (newFavoriteImages) => {
    setFavoriteImages(newFavoriteImages);
  };

  // Define the context value
  const contextValue = {
    breeds,
    favoriteImages,
    updateBreeds,
    updateFavoriteImages,
  };

  // Return the provider with the context value and children
  return (
    <BreedContext.Provider value={contextValue}>
      {children}
    </BreedContext.Provider>
  );
};

// Prop types validation for BreedProvider component
BreedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
