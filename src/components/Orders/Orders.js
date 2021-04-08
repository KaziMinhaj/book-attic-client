import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderTable from './OrderTable';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${loggedInUser.name}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        setOrders(data);
      });
  }, []);

    return (
        <div>
            
            {
             orders.map(order => <OrderTable order={order}></OrderTable>)   
            }
        </div>
    );
};

export default Orders;