import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { AddToCartButton } from "../UI/AddToCartButton";

const Products = (props) => {
  const products = props.products;

  return (
    <div className="flex flex-wrap">
      {products[0] &&
        products.map((product) => {
          return (
            <div key={product._id} className="product">
              <Link to={`/product-view/${product._id}`}>
                <img
                  className="w-full h-[375px]"
                  src={product.src}
                  alt={product.alt}
                ></img>
              </Link>
              <div className="my-1 text-center">{product.name}</div>
              <div className="my-1 text-center">
                <Rating rating={product.rating} />
              </div>
              <div className="my-1 text-center">
                {product.salePrice ? (
                  <>
                    ${product.salePrice}
                    <span className="ml-1 line-through text-xs opacity-50">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </div>
              <div className="mt-2 mb-3 flex justify-center">
                <AddToCartButton productID={product._id} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export { Products };
