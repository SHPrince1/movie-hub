import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../styles/cards.module.css";


const Cards = (props) => {
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.imgDiv}>
        <img
        className={style.imgElem}
            src={props.img} 
            alt="country name"
          />
        </div>
        <div className={style.cardsTit}>
            {/* <p>{props.title}</p> */}
        </div>
        <div className={style.cardscont}>
        <p>{props.title}</p>
        </div>
        
       
      </div>
    </>
  );
};

export default Cards;
