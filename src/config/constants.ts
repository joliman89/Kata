export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type BasketList = {
  basket: BasketItem[];
  emptyBasket: () => void;
  removeFromBasket: (product: Product) => void;
};

export const currentProducts: Product[] = [
  {sku: "A", name: "Product A", unitPrice: 50},
  {sku: "B", name: "Product B", unitPrice: 30},
  {sku: "C", name: "Product C", unitPrice: 20},
  {sku: "D", name: "Product D", unitPrice: 15},
  {sku: "E", name: "Product E", unitPrice: 15},
  {sku: "F", name: "Product F", unitPrice: 15}
];

export type ProductListData = {
  products: Product[];
  addToBasket: (product: Product) => void;
}

export const MAX_PER_ROW = 4;

export type Promotion = {
  sku: string;
  minQuantity: number;
  discountPrice: number;
};

export const currentPromotions: Promotion[] = [
  { sku: "A", minQuantity: 3, discountPrice: 130 },
  { sku: "B", minQuantity: 2, discountPrice: 45 }
];
