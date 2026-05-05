import { Routes, Route } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotfoundPage } from './pages/NotfoundPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

    const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }


  useEffect(() => {
    loadCart();
  }, []);


  /*index => path="/"   those for empty url path*/
  /*path="*"  =>  match any url path اى حاجة*/
  /*put 404 page at the bottom*/
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage />} />

      <Route path="*" element={<NotfoundPage cart={cart} />} />
    </Routes>
  );
}

export default App
