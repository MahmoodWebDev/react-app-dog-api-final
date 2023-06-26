import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchBreedImages } from "../api/api";
import "../styles/BreedImages.css";
const BreedImages = ({ breed, showFav = false }) => {
  // State for storing the images
  const [images, setImages] = useState([]);

  // State for storing the liked images
  const [likedImages, setLikedImages] = useState(() => {
    try {
      const item = window.localStorage.getItem("likedImages");
      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.log(error);
      return {};
    }
  });

  // Fetch the images for the given breed
  useEffect(() => {
    const getImages = async () => {
      const data = await fetchBreedImages(breed);
      setImages(data);
    };

    if (breed) {
      getImages();
    }
  }, [breed]);

  // Update the likedImages state in local storage
  useEffect(() => {
    try {
      const likedImagesJSON = JSON.stringify(likedImages);
      window.localStorage.setItem("likedImages", likedImagesJSON);
    } catch (error) {
      console.log(error);
    }
  }, [likedImages]);

  // Handle like/unlike for an image
  const handleLikeUnlike = (image) => {
    const isImageLiked =
      likedImages[breed] && likedImages[breed].includes(image);
    if (isImageLiked) {
      const updatedLikedImages = likedImages[breed].filter(
        (img) => img !== image
      );
      setLikedImages((prevLikedImages) => ({
        ...prevLikedImages,
        [breed]: updatedLikedImages,
      }));
    } else {
      const breedImages = likedImages[breed] || [];
      setLikedImages((prevLikedImages) => ({
        ...prevLikedImages,
        [breed]: [...breedImages, image],
      }));
    }
  };

  // Get the like caption for an image
  const getLikeCaption = (image) => {
    return likedImages[breed] && likedImages[breed].includes(image)
      ? "Unlike"
      : "Like";
  };

  return (
    <div className="breedImagesContainer">
      {images.map((image, index) => {
        const isImageLiked =
          likedImages[breed] && likedImages[breed].includes(image);

        // If showFav is true and the image is not liked, skip rendering
        if (showFav && !isImageLiked) {
          return null;
        }

        return (
          <div key={index} className="breedImageContainer">
            <img
              className="breedImage"
              key={image}
              src={image}
              alt={breed || "Dog breed"}
            />
            <button className="likeUnlikeButton" onClick={() => handleLikeUnlike(image)}>
              {getLikeCaption(image)}
            </button>
          </div>
        );
      })}
    </div>
  );
};

BreedImages.propTypes = {
  breed: PropTypes.string,
  showFav: PropTypes.bool,
};

BreedImages.defaultProps = {
  breed: "",
  showFav: false,
};

export default BreedImages;
