import "./Dashboard.css";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/categories/getAll")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/items/getAll")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectCategory = (categoryID) => {
    axios
      .get(`/items/${categoryID}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="dashboard-container">
      <div>
        Categories:
        {categories.map((category, catIndex) => (
          <div key={catIndex} onClick={handleSelectCategory.bind(this, category._id)}>
            {category.name}
          </div>
        ))}
      </div>
      <div>
        Items:
        {items &&
          items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <div>{item.emoji} </div>
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
