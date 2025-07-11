import React from "react";
import "../styles/common.css";
import { RxCrossCircled } from "react-icons/rx";
import { type BasketItem, type Promotion, type BasketList, currentPromotions } from "../config/constants";

function getItemTotal(item: BasketItem, promotions: Promotion[]) {
  const promo = promotions.find(
    (p) => p.sku === item.product.sku && item.quantity >= p.minQuantity
  );
  if (promo) {
    return promo.discountPrice;
  }
  return item.quantity * item.product.unitPrice;
}

const Checkout: React.FC<BasketList> = ({ basket, emptyBasket, removeFromBasket }) => {
  
const total = basket.reduce(
  (sum, item) => sum + getItemTotal(item, currentPromotions),
  0
);

  return (
    <div style={{ marginTop: 32 }} className="card">
      <h2>Basket</h2>
       {basket.length === 0 ?
       (
        <div style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  minWidth: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
        <p>Your basket is empty, why not add your favourite item(s)</p>
        </div>
       ) : (   
          <div style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  minWidth: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <span style={{ paddingTop: "10px", fontWeight: "bold" }}>
                  Subtotal: £{total.toFixed(2)}</span>
            {basket.map((item) => {     
              const promo = currentPromotions.find((p) => p.sku === item.product.sku && item.quantity >= p.minQuantity
              );
              return (         
              <span key={item.product.sku} style={{paddingTop: "10px"}}>
                <RxCrossCircled onClick={() => removeFromBasket(item.product)}/>
                <span style={{display: "inline", paddingLeft: "10px"}}>
                {item.product.name} x {item.quantity} = £{getItemTotal(item, currentPromotions).toFixed(2)}
                {promo && <span style={{ color: "green" }}>Promotion applied!</span>}
                </span>
              </span>
  );
})}
            <span style={{paddingTop: "10px", display: "flex", gap: "12px"}}>
            <button onClick={emptyBasket}>Empty Basket</button><button>Checkout</button>
            </span>
          </div>
       )}
    </div>
  );
};

export default Checkout;
