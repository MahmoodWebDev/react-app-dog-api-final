import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BreedList from "./components/BreedList";
import FavoriteImages from "./components/FavoriteImages";
import "./App.css";

function App() {
  return (
    <Router>
      <h1> 🐶 Breeds </h1>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<BreedList showFav={false} />} />
          <Route path="/favbreeds" element={<FavoriteImages />} />
          <Route path="/fav-filter" element={<BreedList showFav={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
