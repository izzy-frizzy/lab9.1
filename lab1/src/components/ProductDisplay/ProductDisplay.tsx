// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

export const ProductDisplay = (props: ProductDisplayProps) => {
  return (
    <div id = {props.product.id}>
        
        {<img src={props.product.imageUrl}></img>}
      {props.showStockStatus && (
        <div>{props.product.inStock ? "in Stock" : "out of stock"}</div>
      )}
      {props.showDescription}
      {}

      {/* {props.product} */}
    </div>
  );
};
