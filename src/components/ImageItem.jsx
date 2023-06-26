import { useContext } from "react";
import PropTypes from "prop-types";
import { BreedContext } from "../context/BreedContext";
import "../styles/ImageItem.css";

const ImageItem = ({ image }) => {
  // Access the favoriteImages state and toggleFavoriteImage function from the BreedContext using useContext hook
  const { favoriteImages, toggleFavoriteImage } = useContext(BreedContext);

  // Define a function to handle toggling the favorite status of an image
  const handleToggleFavorite = () => {
    toggleFavoriteImage(image);
  };

  // Check if the current image is a favorite by comparing its URL with the URLs in favoriteImages
  const isFavorite = favoriteImages.some(
    (favImage) => favImage.url === image.url
  );

  return (
    <div className={`image-item ${isFavorite ? "favorite" : ""}`}>
      <img src={image.url} alt={image.breed} />
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

// Define prop types for the image prop
ImageItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;
