import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  let user = props.user;
  let setUser = props.setUser;
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <span> Welcome {user && user.name} to The Affordable-Tech-Store!</span>
      {user ? (
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      ) : (
        <Link to="/authPage">Log In / SignUp</Link>
      )}
    </nav>
  );
}
