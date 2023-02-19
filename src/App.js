import "./App.css";
import InternDetails from "./components/pages/InternDetails";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import InternDetails from "./components/pages/InternDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intern-details" element={<InternDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
