import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { account } from "./appwriteConfig";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Notes from "./components/Notes/Notes";
import { ID } from "appwrite";

export const UserContext = createContext();

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    async function getLoggedUser() {
      try {
        const res = await account.get();
        setUser({ username: res.name, email: res.email });
        navigate("/notes");
      } catch (e) {
        console.error(e.message);
      }
    }
    getLoggedUser();
  }, []);

  async function handleSignUp(data) {
    try {
      await account.create(
        ID.unique(),
        data.email,
        data.password,
        data.username
      );
      await account.createEmailSession(data.email, data.password);

      // success
      setUser({ username: data.username, email: data.email });
    } catch (error) {
      alert(error.message); // Failure
    }
  }
  async function handleLogin(data) {
    try {
      await account.createEmailSession(data.email, data.password);
      const loggedUser = await account.get();
      setUser({ username: loggedUser.name, email: loggedUser.email });
      navigate("/notes");
    } catch (e) {
      alert(e.message);
    }
  }
  async function handleLogout() {
    try {
      await account.deleteSession("current");
      setUser({ username: "", email: "" });
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route
          path="/"
          element={
            user.email ? (
              <Navigate to="/notes" replace="true" />
            ) : (
              <Navigate to="/signup" replace="true" />
            )
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/notes"
          element={
            user.email ? (
              <Notes handleLogout={handleLogout} />
            ) : (
              <Navigate to="/signup" replace="true" />
            )
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignUp={handleSignUp} />}
        />
        <Route
          path="*"
          element={<h1 className="text-center text-3xl">404 Page Not Found</h1>}
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
