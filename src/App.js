import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ColorSchemesExample from "./components/navbar";

// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import MoviesPage from './pages/movies';
import TrendingsPage from "./components/trendings-page";
import TvSeriesPage from "./components/tvseries-page";
import SearchBar from "./components/search-bar";


function App() {
  return (
    <div className="NavBox">
      <Router>
        <ColorSchemesExample />
       

        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/trendings" exact element={<TrendingsPage />} />
          <Route path="/tvseries" exact element={<TvSeriesPage />} />
          <Route path="/search" exact element={<SearchBar />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
