import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route  path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
