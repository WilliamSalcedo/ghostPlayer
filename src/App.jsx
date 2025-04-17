import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./pages/Home/HomeScreen";
import LoginScreen from "./pages/Login/LoginScreen";
import RegisterScreen from "./pages/Registro/RegistroScreen";
import ForosScreen from "./pages/Foros/ForosScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/foros" element={<ForosScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </>
  );
}

export default App;
