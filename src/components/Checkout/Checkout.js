import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {

    const [aBook,setABook] = useState({})
    const {id} = useParams()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setABook(data);
          });
      }, []);

      const handleClick = ()=> {
        const info = {
            name:loggedInUser.name,
            bookName:aBook.book,
            author:aBook.author,
            price:aBook.price,
            date : new Date()
      }
      fetch("http://localhost:5000/addOrder", {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(info)
      })
      .then(res => alert("order confirmed"))
    };
    
    return (
        <div className="table">
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{aBook.book}</td>
            <td>{aBook.author}</td>
            <td>{aBook.price}</td>
          </tr>
          
        </tbody>
      </Table>
      <button id="checkoutBtn" onClick={handleClick}>Checkout</button>
      </div>
    );
};

export default Checkout;