import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="app-main">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authPage" element={<AuthPage setUser={setUser} />} />
        </Routes>
      </>
    </main>
  );
}
