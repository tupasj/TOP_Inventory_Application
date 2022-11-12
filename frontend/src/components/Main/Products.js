import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { AddToCartButton } from "../UI/AddToCartButton";

const Products = (props) => {
  const products = props.products;

  return (
    <div className="products">
      {products[0] &&
        products.map((product) => {
          return (
            <div key={product._id} className="product">
              <Link to={`/product-view/${product._id}`}>
                <img
                  className="product__image"
                  src={product.src}
                  alt={product.alt}
                ></img>
              </Link>
              <div className="product__name">{product.name}</div>
              <div className="product__rating">
                <Rating rating={product.rating} />
              </div>
              <div className="product__price">
                {product.salePrice ? (
                  <>
                    ${product.salePrice}
                    <span className="product__price--line-through">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </div>
              <div className="product__buttons">
                <AddToCartButton productID={product._id} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export { Products };
