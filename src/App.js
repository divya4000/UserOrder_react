import "./style.css";
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./Navbar";
import User from "./pages/user";
import Orderdetails from "./pages/Orderdetails";
import Productdetails from "./pages/Productdetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar/>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/orderdetails/:user_id" element={<Orderdetails/>}/>
        <Route path="/productdetails/:product_id" element={<Productdetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;