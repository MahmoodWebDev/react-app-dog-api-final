// Import necessary libraries and hooks
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchBreeds } from "../api/api";
import "../styles/BreedList.css";
import BreedImages from "./BreedImages";

// Define the BreedList component
const BreedList = ({ showFav }) => {
  // Set up a piece of state to hold the list of breeds. Initialize it as an empty array.
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState("");

  // Define an effect that runs when the component mounts. This effect fetches the list of dog breeds.
  useEffect(() => {
    // Define an async function inside the effect.
    const getBreeds = async () => {
      try {
        const data = await fetchBreeds(); // Call the fetchBreeds function and await the response.

        let resultArray = [];

        // Iterate over the keys of the data object
        Object.keys(data).forEach((key) => {
          if (data[key].length === 0) {
            resultArray.push(key);
          } else {
            data[key].forEach((item) => {
              resultArray.push(`${item} ${key}`);
            });
          }
        });

        setBreeds(resultArray); // Once the response is received, update the breeds state.
      } catch (error) {
        console.error(error);
        setBreeds([]);
      }
    };

    getBreeds(); // Call the getBreeds function.
  }, []); // Pass an empty dependencies array to the effect, which means the effect will only run once, when the component mounts.

  // Render the BreedList component
  return (
    <>
      <Link
        to={showFav ? "/" : "/favbreeds/"}
        style={{
          textDecoration: "none",
        }}
      >
        <button
          className="link-button"
          style={{
            cursor: "pointer",
            textAlign: "center",
            margin: "20px",
          }}
        >
          {showFav ? "All Breeds" : "⭐ Favorite Breeds"}
        </button>
      </Link>

      <h2>{showFav ? "Filter Favorite Breeds" : "All Breeds"}</h2>
      <select onChange={(e) => setBreed(e.target.value)}>
        <option>Select Dog Breed</option>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <BreedImages breed={breed} showFav={showFav} />
    </>
  );
};

// Specify the prop types for BreedList component
BreedList.propTypes = {
  showFav: PropTypes.bool,
};

// Set default prop values for BreedList component
BreedList.defaultProps = {
  showFav: false,
};

// Export the BreedList component
export default BreedList;
