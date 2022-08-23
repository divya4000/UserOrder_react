import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://assessment.api.vweb.app/users"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="Appi">
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ "marginTop":"10px" ,"textAlign":"center","marginLeft":"42%","border":"2px solid black"}}
      />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
            </thead>
            {product     
              .filter((item) => {     
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase()) 
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <tr key={item.user_id}>
                    <td>
                      <Link to={`/orderdetails/${item.user_id}`} style={{"textDecoration":"none","color": "#2962ff"}}>
                      {item.user_id}
                      </Link>
                    </td>
                    <td >
                      {item.name}
                    </td>
                  </tr>
                );
              })}
        </table>
    </div>
  );
};

export default User;