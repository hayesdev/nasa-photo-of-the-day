import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import apod from "./components/apod";

function App() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=5OJfH4G46HOISrf0mJx8LZs6h3XrtOUJR7g943u2`)
      .then(response => {
        console.log(response);
        setPhotoData(response.data);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
