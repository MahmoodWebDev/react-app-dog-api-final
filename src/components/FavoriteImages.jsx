import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FavoriteImages = () => {
  // Define the state variable for storing the images
  const [images, setImages] = useState({});

  useEffect(() => {
    // Fetch images from local storage on initial render
    const localStorageImages = JSON.parse(
      window.localStorage.getItem("likedImages")
    );
    // Update the images state with the retrieved data
    setImages(localStorageImages);
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/">All Breeds</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/fav-filter">Filter</Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* Iterate over the breed images */}
      {Object.keys(images).map((breed, index) => {
        // Skip rendering if there are no images for the breed
        if (images[breed].length === 0) return null;

        return (
          <div key={breed}>
            <h2>{breed}</h2>
            <div key={index} className="breedImagesContainer">
              {images[breed].map((imageUrl, index) => (
                <div key={index} className="breedImageContainer">
                  <img
                    key={index}
                    src={imageUrl}
                    alt={breed}
                    className="breedImage"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteImages;
