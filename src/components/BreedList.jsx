// Import necessary libraries and hooks
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchBreeds } from "../api/api";
import "../styles/BreedList.css";
import BreedImages from "./BreedImages";

// Define the component
// eslint-disable-next-line react/prop-types
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

  // Render a select dropdown with the breeds
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              {showFav ? (
                <Link to="/" style={{ textAlign: "center" }}>
                  All Breeds
                </Link>
              ) : (
                <Link to="/favbreeds/">⭐ Favorite Breeds </Link>
              )}
            </button>
          </li>
        </ul>
      </nav>
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

// Export the component
export default BreedList;

// // Import necessary libraries and hooks
// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { fetchBreeds } from "../api/api";
// import "../styles/BreedList.css";
// import BreedImages from "./BreedImages";

// // Define the component
// // eslint-disable-next-line react/prop-types
// const BreedList = ({ showFav }) => {
//   // Set up a piece of state to hold the list of breeds. Initialize it as an empty array.
//   const [breeds, setBreeds] = useState([]);
//   const [breed, setBreed] = useState([]);

//   // Define an effect that runs when the component mounts. This effect fetches the list of dog breeds.
//   useEffect(() => {
//     // Define an async function inside the effect.
//     const getBreeds = async () => {
//       try {
//         const data = await fetchBreeds(); // Call the fetchBreeds function and await the response.

//         let resultArray = [];

//         // Iterate over the keys of the data object
//         Object.keys(data).forEach((key) => {
//           if (data[key].length === 0) {
//             resultArray.push(key);
//           } else {
//             data[key].forEach((item) => {
//               resultArray.push(`${item} ${key}`);
//             });
//           }
//         });

//         setBreeds(resultArray); // Once the response is received, update the breeds state.
//       } catch (error) {
//         console.error(error);
//         setBreeds([]);
//       }
//     };

//     getBreeds(); // Call the getBreeds function.
//   }, []); // Pass an empty dependencies array to the effect, which means the effect will only run once, when the component mounts.

//   // Render a select dropdown with the breeds
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <button>
//               {showFav ? (
//                 <Link to="/" style={{ textAlign: "center" }}>
//                   All Breeds
//                 </Link>
//               ) : (
//                 <Link to="/favbreeds/">⭐ Favorite Breeds </Link>
//               )}
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <h2>{showFav ? "Filter Favorite Breeds" : "All Breeds"}</h2>
//       <select onChange={(e) => setBreed(e.target.value)}>
//         <option>Select Dog Breed</option>
//         {breeds.map((breed, index) => (
//           <option key={index} value={breed}>
//             {breed}
//           </option>
//         ))}
//       </select>
//       <BreedImages breed={breed} showFav={showFav} />
//     </>
//   );
// };

// // Specify the prop types for BreedList component
// BreedList.propTypes = {
//   showFav: PropTypes.bool,
// };

// // Set default prop values for BreedList component
// BreedList.defaultProps = {
//   showFav: false,
// };

// // Export the component
// export default BreedList;

// // Import necessary libraries and hooks
// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { fetchBreeds } from "../api/api";
// import "../styles/BreedList.css";
// import BreedImages from "./BreedImages";

// // Define the component
// // eslint-disable-next-line react/prop-types
// const BreedList = ({ showFav }) => {
//   // Set up a piece of state to hold the list of breeds. Initialize it as an empty array.
//   const [breeds, setBreeds] = useState([]);
//   const [breed, setBreed] = useState([]);

//   // Define an effect that runs when the component mounts. This effect fetches the list of dog breeds.
//   useEffect(() => {
//     // Define an async function inside the effect.
//     const getBreeds = async () => {
//       const data = await fetchBreeds(); // Call the fetchBreeds function and await the response.

//       let resultArray = [];

//       // Iterate over the keys of the data object
//       Object.keys(data).forEach((key) => {
//         if (data[key].length === 0) {
//           resultArray.push(key);
//         } else {
//           data[key].forEach((item) => {
//             resultArray.push(`${item} ${key}`);
//           });
//         }
//       });

//       setBreeds(resultArray); // Once the response is received, update the breeds state.
//     };

//     getBreeds(); // Call the getBreeds function.
//   }, []); // Pass an empty dependencies array to the effect, which means the effect will only run once, when the component mounts.

//   // Render a select dropdown with the breeds
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <button>
//               {showFav ? (
//                 <Link to="/">All Breeds</Link>
//               ) : (
//                 <Link to="/favbreeds/">⭐ Favorite Breeds </Link>
//               )}
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <h2>{showFav ? "Filter Favorite Breeds" : "All Breeds"}</h2>
//       <select onChange={(e) => setBreed(e.target.value)}>
//         <option defaultChecked>Select Dog Breed</option>
//         {breeds.map((breed, index) => (
//           <option key={index} value={breed}>
//             {breed}
//           </option>
//         ))}
//       </select>
//       <BreedImages breed={breed} showFav={showFav} />
//     </>
//   );
// };

// BreedImages.propTypes = {
//   showFav: PropTypes.bool,
// };

// BreedImages.defaultProps = {
//   showFav: false,
// };

// // Export the component
// export default BreedList;
