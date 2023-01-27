import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Button, Container } from "react-bootstrap";
import Cards from "../components/cards";

import style from "../styles/movies-page.module.css";

// DATA



const TvSeries = () => {
  const [euroupe, setEuroupe] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/region/europe'
    ,};

    useEffect(() => {
      axios.request(options).then(function (response) {
        setEuroupe(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    });

  return (
    <div>
      <Container>
        <div className={style.btnsBox}>
          <Button className={style.cusBtn}>
            <p>Action & Adventure</p >
          </Button>
          
          <Button className={style.cusBtn}> 
            <p>Animation</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Comedy</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Crime</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Documentary</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Drama</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Family</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Kids</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Reality</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>War & Politics</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Music</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Mystery</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Romance</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Science Fiction</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>TV Movies</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Thriller</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>War</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Western</p>
          </Button>
         
         
         
        </div>
        <div className={style.parentBox}>
          <div className={style.cardParentBox}>
            <div className={style.cardBox}>
              {euroupe.map((item) => (
                <Cards key={item.id} img={item?.flags?.png} title={item?.name?.common} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TvSeries;
