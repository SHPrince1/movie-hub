import React, { useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import List from "../components/list";
import style from "../styles/searchbar.module.css";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([
    "walk the dog",
    "buy the milk",
    "learn some code",
  ]);

  // userinput is controlled by the App component
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const addItem = (e) => {
    if (userInput !== "") {
      setList([...list, userInput]);
      setUserInput("");
    }
  };

  const removeItem = (item) => {
    const updatedList = list.filter((listItem) => listItem !== item);
    setList(updatedList);
  };

  return (
    <Container>
      <Fragment>
        <List list={list} removeItem={removeItem} />
        <hr />
        <form>
          <div className={style.searchArea}> 
            <input
              placeholder="Search Movies"
              value={userInput}
              onChange={handleChange}
            />
            <button type="button" onClick={addItem}>
              {"Search"}
            </button>
          </div>
        </form>
      </Fragment>
    </Container>
  );
};

export default SearchBar;
