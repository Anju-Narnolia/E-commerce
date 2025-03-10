import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
