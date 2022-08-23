import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
const Productdetails = () => {
  const [product, setProduct] = useState([]);
  const {product_id}= useParams();
    const getProductData = async () => {
      try {
        const data = await axios.get(
          "https://assessment.api.vweb.app/products"
        );
        const item = data.data.filter(thisProject => thisProject.product_id == product_id);
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
       <h3 style={{"marginBottom":"10px", "marginTop":"20px" ,"textAlign":"center","marginLeft":"10px","color":"black"}}>Product Details of Product Id <span>{product_id}</span></h3>
      <table>
        <thead>
               <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Selling Price</th>
            </tr>
            </thead>
            {product
              .map((item) => {
                return (
                    <tr>
                    <td>
                      {item.name}
                      </td>
                    <td>
                      {item.stock}
                      </td>
                    <td>
                      {item.selling_price}
                      </td>
                      </tr>
                );
              })}
        </table>
    </div>
  )
}

export default Productdetails