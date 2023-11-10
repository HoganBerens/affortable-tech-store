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

  const handleCategoryMenu = () => {};

  return (
    <nav className="navbar-container">
      <Link to="/cart">Your Cart</Link>
      <Link to="/">
        <span>Affordable-Tech-Store</span>
      </Link>
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
