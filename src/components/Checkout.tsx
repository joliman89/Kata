import React from "react";
import "../styles/common.css";
import { RxCrossCircled } from "react-icons/rx";
import { type BasketItem, type Promotion, type BasketList, currentPromotions } from "../config/constants";
import { MdDiscount } from "react-icons/md";

function getItemTotal(item: BasketItem, promotions: Promotion[]) {
    const promo = promotions.find(p => p.sku === item.product.sku);
  if (promo && item.quantity >= promo.groupSize) {
    //work out how many groups of each item you have to allow multi discounts 
const groups = Math.floor(item.quantity / promo.groupSize);
    const remainder = item.quantity % promo.groupSize;
    return groups * promo.discountPrice + remainder * item.product.unitPrice;  }
  return item.quantity * item.product.unitPrice;
}

const Checkout: React.FC<BasketList> = ({ basket, emptyBasket, removeFromBasket }) => {
  
const total = basket.reduce(
  (sum, item) => sum + getItemTotal(item, currentPromotions),
  0
);

  return (
    <div className="checkout-card card">
      <h2>Basket</h2>
       {basket.length === 0 ?
       (
        <div className="basket-container">
        <p>Your basket is empty, why not add your favourite item(s)</p>
        </div>
       ) : (   
          <div className="basket-container">
            <div className="subtotal">
                <span>
                  Subtotal: £{(total / 100).toFixed(2)}</span>
            </div>
            {basket.map((item) => {     
              const promo = currentPromotions.find((p) => p.sku === item.product.sku && item.quantity >= p.groupSize
              );
              return (     
              <span key={item.product.sku} className="basket-item">
                <RxCrossCircled onClick={() => removeFromBasket(item.product)}/>
                <span className="basket-item-details">
                {item.product.name} x {item.quantity} = £{(getItemTotal(item, currentPromotions) / 100).toFixed(2)}
                </span>
                {promo && <span className="basket-promotion"><MdDiscount /></span>}
              </span>
              );
})}
            <span className="basket-actions">
            <button onClick={emptyBasket}>Empty Basket</button><button>Checkout</button>
            </span>
          </div>
       )}
    </div>
  );
};

export default Checkout;
