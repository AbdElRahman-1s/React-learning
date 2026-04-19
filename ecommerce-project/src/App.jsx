import { Routes, Route } from 'react-router';
import  axios  from 'axios';
import { useState , useEffect } from 'react';
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotfoundPage } from './pages/NotfoundPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  },[]);


  /*index => path="/"   those for empty url path*/
  /*path="*"  =>  match any url path اى حاجة*/
  /*put 404 page at the bottom*/
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />

      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App
