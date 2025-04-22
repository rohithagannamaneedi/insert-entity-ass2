import React, { useState } from "react";
import "./addmovie.css"


const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    posterImageURL:"",
    synopsis:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="movie-container" style={{ padding: "20px",display:"flex",justifyItems:"center",alignItems:"center" }}>
      <h2>Add New Book</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" onChange={handleChange} />

        <label>Director:</label>
        <input type="text" name="director" onChange={handleChange} />

        <label>Genre:</label>
        <input type="text" name="fenre" onChange={handleChange} />

        <label>Release Year:</label>
        <input type="Number" name="releaseYear" onChange={handleChange} />

        <label>Synopsis:</label>
        <textarea name="synopsis" onChange={handleChange}></textarea>

        <label>Poster Image URL:</label>
        <input type="url" name="posterImageURL" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;