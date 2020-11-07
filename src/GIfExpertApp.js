import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
//import PropTypes from "prop-types";
const GIfExpertApp = (props) => {
  // const categories = ["One punch", "Dragon Ball Z", "Cabelleros del zodiaco"];
  const [categories, setCategories] = useState(["One punch"]);
  //  const handleAdd = () => {
  //setCategories([...categories, "HunteHuntewww"]);
  //otra forma de hacerlo
  //  setCategories((cats) => [...cats, "HunteHuntewww"]);
  //};

  return (
    <>
      <h1>GIfExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GIfExpertApp.propTypes = {};

export default GIfExpertApp;
