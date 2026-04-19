import axios from 'axios';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import './CheckoutPage.css';
import { useEffect, useState } from 'react';



export function CheckoutPage({ cart }) {

  const [deliveryOptions, setDeliverOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then((Response) => {
        setDeliverOptions(Response.data);
      });


    axios.get('/api/payment-summary')
      .then((response) => {
        setPaymentSummary(response.data);
      });

  }, [])


  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
            <OrderSummary 
              cart={cart}
              deliveryOptions={deliveryOptions} 
            />

          <PaymentSummary paymentSummary={paymentSummary} />

        </div>
      </div>
    </>
  );
}