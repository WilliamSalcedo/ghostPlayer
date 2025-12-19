import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./pages/Home/HomeScreen";
import LoginScreen from "./pages/Login/LoginScreen";
import RegisterScreen from "./pages/Registro/RegistroScreen";
import ForosScreen from "./pages/Foros/ForosScreen";
import ProfileScreen from "./pages/Profile/ProfileScreen";
import AboutScreen from "./pages/About/AboutScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/foros" element={<ForosScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </>
  );
}

export default App;
