import React from "react";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
}

type ProductListData = {
  product: Product;
}

const ProductList: React.FC<ProductListData> = ({product}) => (

<div>
  <ul>{product.name}</ul>
</div>
)

export default ProductList;