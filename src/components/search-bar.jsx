import React, { useState, Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import style from "../styles/searchbar.module.css";
import Cards from "../components/cards";
import axios from 'axios';

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
 
  const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all',
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
    setApiData(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  },)

  // userinput is controlled by the App component
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
   const newData = apiData.filter(e => e?.name?.common?.toLowerCase() === userInput?.toLowerCase());
   setData(newData);
   setShow(true);
  }

  useEffect(() => {
    console.log("User Input:::", userInput);
    if(userInput === ''){
      setShow(false);
    }
  }, [show, userInput]);

  

  return (
    <Container>
      <Fragment>
        <hr />
        
          <div className={style.searchArea}> 
            <input
              placeholder="Search Movies"
              value={userInput}
              onChange={handleChange}
            />
            <input className={style.search} type="submit" onClick={handleSubmit} value='Search' />
              
          </div>
        

        <div className={style.cardBox}>
              {show && data.map((item, index) => (
                <Cards key={index} img={item.flags?.png} title={item.name?.common} />
              ))}

              
            </div>
      </Fragment>
    </Container>
  );
};


export default SearchBar;

