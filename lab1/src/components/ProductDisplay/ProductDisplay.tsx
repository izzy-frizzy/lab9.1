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
    <div id={props.product.id}>
      {/* image */}

      {<img src={props.product.imageUrl}></img>}

      {/* name */}
      <p>{props.product.name}</p>

      {/* price */}
      <p>{props.product.price}</p>

      {/* decription */}
      <p>
        {props.showDescription && (
          <div>
            {props.product.description
              ? "High-quality wireless headphones with noise cancellation"
              : ""}
          </div>
        )}
      </p>

      {/* stock */}

      {props.showStockStatus && (
        <div>{props.product.inStock ? "in Stock" : "out of stock"}</div>
      )}

      {/* add to cart */}
      {props.onAddToCart && (
        <button onClick={() => props.onAddToCart?.(props.product.id)}>
          Add to Cart
        </button>
      )}
      {props.children}
    </div>
  );
};
