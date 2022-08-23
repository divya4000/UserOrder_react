import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
const Orderdetails = () => {
  const [product, setProduct] = useState([]);
  const {user_id}= useParams();
    const getProductData = async () => {
      try {
        const data = await axios.get(
          "https://assessment.api.vweb.app/orders"
        );
        const item = data.data.filter(thisProject => thisProject.user_id == user_id);
        console.log(item);
        setProduct(item);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getProductData();
    }, []);
  return (
    <div className="Appi">
      <h3 style={{"marginBottom":"10px", "marginTop":"20px" ,"textAlign":"center","marginLeft":"10px" ,"color":"black"}}>Order Details of User Id <span>{user_id}</span></h3>
      <table>
        <thead>
        <tr>
              <th>Product Id</th>
              <th>Order Id</th>
              <th>Quantity</th>
              <th>Date of order</th>
            </tr>
          </thead>
            {product
              .map((item) => {
                return (
                  <tr>
                    <td>
                    <Link to={`/productdetails/${item.product_id}`} style={{"textDecoration":"none","color": "#2962ff"}}>
                      Product Details of Product Id {item.product_id}
                      </Link>
                      </td>
                    <td>
                      {item.order_id}
                      </td>
                    <td>
                      {item.quantity}
                      </td>
                    <td>
                      {item.order_date}
                      </td>

                      </tr>
                );
              })}
        </table>
    </div>
  )
}

export default Orderdetails;