import React from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = (props) => {
    return (
        <div>
             <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{props.order.name}</td>
            <td>{props.order.bookName}</td>
            <td>{props.order.author}</td>
            <td>{props.order.price}</td>
            <td>{props.order.date}</td>
          </tr>
          
        </tbody>
      </Table>
        </div>
    );
};

export default OrderTable;