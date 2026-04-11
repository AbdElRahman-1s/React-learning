import { Routes , Route} from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css'

function App() {
/*index => path="/"   those for empty url path*/
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App
