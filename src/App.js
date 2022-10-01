import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser, userAccessToken } from "./utils/fetchUser";
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/login", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);
  return (
    <Routes>
      <Route path="/*" element={<Home user={user} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
