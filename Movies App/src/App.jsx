import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route
            path="movies/:type"
            element={
              <>
                <div className="flex justify-center items-center h-[100vh]">
                  <h1 className="text-[48px]">Coming soon...</h1>
                </div>
              </>
            }
          ></Route>
          {/* <Route path="movies/search" element={<SearchPage />}></Route> */}
          <Route path="/*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
