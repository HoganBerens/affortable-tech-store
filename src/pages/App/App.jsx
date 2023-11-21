import "./App.css";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Cart/Cart";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState(getUser());
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

  return (
    <main className="app-main">
      <>
        <NavBar user={user} setUser={setUser} items={items} categories={categories} />
        <Routes>
          <Route path="/" element={<Dashboard setItems={setItems} items={items} categories={categories} />} />
          <Route path="/cart" element={<Cart items={items} categories={categories} />} />
          <Route path="/authPage" element={<AuthPage setUser={setUser} />} />
        </Routes>
      </>
    </main>
  );
}
