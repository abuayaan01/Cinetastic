import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movies</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movies</h1>}></Route>
          <Route path="/*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
