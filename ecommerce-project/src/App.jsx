import { Routes , Route} from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotfoundPage } from './pages/NotfoundPage';
import './App.css'

function App() {
/*index => path="/"   those for empty url path*/
/*path="*"  =>  match any url path اى حاجة*/ 
/*put 404 page at the bottom*/
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />

      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App
