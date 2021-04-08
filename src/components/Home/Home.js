import React, { useEffect, useState } from "react";
import { CardColumns } from "react-bootstrap";
import './Home.css';
import ShowBooks from "./ShowBooks";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allbooks")
      .then((res) => res.json())
      .then((data) => {
        console.log("response :", data);
        setBooks(data);
        // console.log("books :", books);
      });
  }, []);

  return (
    <CardColumns className="card-container">
      {books.map((book) => <ShowBooks book={book}></ShowBooks>
      )}
    </CardColumns>
  );
};

// useEffect(() => {
//   fetchMyAPI()
//   async function fetchMyAPI() {
//     let response = await fetch('http://localhost:5000/allbooks')
//     response = await response.json()
//     console.log("response :",response);
//     setBooks(response)
//     console.log("books :" ,books);
//   }
// }, [setBooks])

export default Home;
