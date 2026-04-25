import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utills/money";

export function CartItemDetails({ cartItem, loadCart }) {

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const [quantityUpdate, setQuantityUpdate] = useState(false);

  const [quantity, setQuantity] = useState(cartItem.quantity);

  const switchStateUpdate = async () => {
    if (quantityUpdate) {

      await axios.put(`/api/cart-items/${cartItem.product.id}`, {
        quantity: Number(quantity)
      });
      await loadCart();
      setQuantityUpdate(false);
    }
    else {
      setQuantityUpdate(true);
    }
  };

  const editQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const keyEditQuantity = (event) => {
    if(event.key === 'Enter'){
      switchStateUpdate();
    }
    else if(event.key === 'Escape'){
      setQuantity(cartItem.quantity);
      setQuantityUpdate(false);
    }
  };

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{quantityUpdate
              ? <input className="quantity-textbox" type="number"
                value={quantity} onChange={editQuantity} 
                onKeyDown={keyEditQuantity}/>
              : <span className="quantity-label">{cartItem.quantity}</span>
            }
          </span>

          <span className="update-quantity-link link-primary"
            onClick={switchStateUpdate}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}