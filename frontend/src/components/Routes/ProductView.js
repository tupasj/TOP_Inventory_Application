import { useState, useEffect, useRef, useContext } from "react";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { useParams } from "react-router-dom";
import { AddToCartButton } from "../UI/AddToCartButton";
import ClothesAPI from "../../utils/api/ClothesAPI";

const ProductView = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const quantityRef = useRef();
  const urlParam = useParams();
  const { itemCount, setItemCount } = useContext(UsesCartButtonContext);

  useEffect(() => {
    const getSelectedProduct = async () => {
      const selectedProduct = await ClothesAPI.getSelectedProduct(
        urlParam.paramId
      );
      setSelectedProduct(selectedProduct);
    };
    getSelectedProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-[5%]">
      <div className="product-view-main">
        <img
          className="w-auto h-[500px]"
          src={selectedProduct.src}
          alt={selectedProduct.alt}
        ></img>
        <div className="flex flex-col items-center justify-center gap-12">
          <span className="block font-bold">{selectedProduct.name}</span>
          <div className="flex flex-col gap-2 text-center">
            <label htmlFor="quantity">Quantity: </label>
            <input
              className="rounded border-[1px] border-black/25 p-1
              bg-slate-light-gray"
              ref={quantityRef}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
            ></input>
          </div>
          <div className="mt-7">
            <AddToCartButton
              className="mx-1"
              ref={quantityRef}
              productID={urlParam.paramId}
              itemCount={itemCount}
              setItemCount={setItemCount}
            />
          </div>
        </div>
      </div>
      <div className="pl-[6%] pt-[2%]">
        <span className="block mb-3 font-bold">Product Details</span>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          aliquet bibendum enim facilisis gravida neque convallis. At
          consectetur lorem donec massa sapien. Senectus et netus et malesuada
          fames ac turpis. Morbi enim nunc faucibus a pellentesque sit amet
          porttitor eget. Massa ultricies mi quis hendrerit dolor magna eget.
          Amet cursus sit amet dictum sit amet justo. Vitae auctor eu augue ut
          lectus arcu bibendum. In fermentum posuere urna nec tincidunt praesent
          semper feugiat. Dui accumsan sit amet nulla facilisi morbi tempus.
          Euismod quis viverra nibh cras pulvinar.
        </p>
        <ul className="pl-0 list-disc list-inside">
          <li>Bullet 1</li>
          <li>Bullet 2</li>
          <li>Bullet 3</li>
        </ul>
      </div>
    </div>
  );
};

export { ProductView };
