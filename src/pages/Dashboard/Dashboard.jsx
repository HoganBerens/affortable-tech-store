import "./Dashboard.css";
import { React } from "react";
import axios from "axios";

const Dashboard = (props) => {
  let items = props.items;
  let categories = props.categories;
  let setItems = props.setItems;

  const handleCategorySelect = (category) => {
    axios
      .get(`/items/getCategory/${category._id}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dashboard-container">
      <div>
        {categories.map((category, categoryIndex) => (
          <div onClick={handleCategorySelect.bind(this, category)} key={categoryIndex}>
            {category.name}
          </div>
        ))}
      </div>
      <div>
        {items.map((item, itemIndex) => (
          <div key={itemIndex}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
