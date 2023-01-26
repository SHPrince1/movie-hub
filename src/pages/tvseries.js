import React from "react";
import { Container } from "react-bootstrap";
import Cards  from "../components/cards"

import style from "../styles/movies-page.module.css";
import TvSeries from "../components/tvseries-page";



// DATA



const TvSeriesPage = () => {
  return (
    <div>
     <TvSeries />

    </div>
  );
};

export default TvSeriesPage;
