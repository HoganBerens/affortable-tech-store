import "./Dashboard.css";
import { React } from "react";

const Dashboard = (props) => {
  let items = props.items;
  let categories = props.categories;

  return (
    <div className="dashboard-container">
      <div>
        {items.map((item, itemIndex) => (
          <div key={itemIndex}>{item.name}</div>
        ))}

        {categories.map((cat, catIndex) => (
          <div key={catIndex}>{cat.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
