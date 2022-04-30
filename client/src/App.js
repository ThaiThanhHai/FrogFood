import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
