import React from "react";
import "../styles/common.css";
import { type ProductListData, currentPromotions, MAX_PER_ROW } from "../config/constants";
import { GiFruitBowl, GiBananaBunch, GiChocolateBar, GiDonut, GiCheeseWedge } from "react-icons/gi";

const getProductIcon = (iconName: string) => {
  const iconProps = { size: 80, className: "product-icon" };
  
  switch (iconName) {
    case "apple":
      return <GiFruitBowl {...iconProps} />;
    case "banana":
      return <GiBananaBunch {...iconProps} />;
    case "cheese":
      return <GiCheeseWedge {...iconProps} />;
    case "doughnut":
      return <GiDonut {...iconProps} />;
    default:
      return <GiFruitBowl {...iconProps} />;
  }
};


const ProductList: React.FC<ProductListData> = ({products, addToBasket }) => {

  const rows = [];
  for (let i = 0; i < products.length; i += MAX_PER_ROW) {
    rows.push(products.slice(i, i + MAX_PER_ROW));
  }

return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="product-row">
            {row.map((product) => {
              const promo = currentPromotions.find((p) => p.sku === product.sku
              );
              return (
              <div
                key={product.sku}
                className="product-card">
                <span>
                  <strong>{product.name}</strong>
                </span>
                <div className="product-icon-container">
                  {getProductIcon(product.icon)}
                </div>
                {promo && (
                  <span className="promotion-info">
                    Buy {promo.groupSize} for £{(promo.discountPrice / 100).toFixed(2)}
                    </span>
                )}
                <div className="product-price-container">
                <span className="product-price">
                 £{(product.unitPrice / 100).toFixed(2)}
                 </span>
                 <span>
                <button onClick={() => addToBasket(product)}>
                  Add to Basket
                </button>
                </span>
              </div>
            </div>
            )
          })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;