import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoData() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=5OJfH4G46HOISrf0mJx8LZs6h3XrtOUJR7g943u2`
      )
      .then(response => {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      <PhotoCard
        // key={photos.id}
        title={photos.title}
        date={photos.date}
        description={photos.explanation}
        photographer={photos.copyright}
        imgUrl={photos.url}
      />
      {/* <PhotoCard /> */}
    </div>
  );
}
