import "./Dashboard.css";
import { React } from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  let user = props.user;

  return (
    <div className="dashboard-container">
      <Link to="/mines">Mines</Link>
    </div>
  );
};
export default Dashboard;
