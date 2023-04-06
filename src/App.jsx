import { useContext, useState, createContext } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notes from "./components/Notes/Notes";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user.email ? (
                <Navigate to="/notes" replace={true} />
              ) : (
                <Navigate to="/signup" replace="true" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/notes"
            element={
              user.email ? <Notes /> : <Navigate to="/signup" replace="true" />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-center text-3xl">404 Page Not Found</h1>
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
