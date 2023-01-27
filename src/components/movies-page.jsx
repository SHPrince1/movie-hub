import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Container, Button } from "react-bootstrap";
import style from "../styles/movies-page.module.css";
import Cards from "./cards";

const MoviesPage = () => {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  // pagination code

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = movieData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movieData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movieData.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <Container>
        <div className={style.btnsBox}>
          <Button className={style.cusBtn}>
            <p>Action</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Adventure</p>
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
            <p>Fantancy</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>History</p>
          </Button>
          <Button className={style.cusBtn}>
            <p>Horror</p>
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
              {/* {movieData.map((item, index) => (
                <Cards
                  key={index}
                  img={item?.flags?.png}
                  title={item?.name?.common}
                />
              ))} */}

              {currentItems &&
                currentItems.map((item, index) => (
                  <Cards
                    key={index}
                    img={item?.flags?.png}
                    title={item?.name?.common}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={style.paginateBox}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next>>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
        </div>
       
      </Container>
    </div>
  );
};

export default MoviesPage;
