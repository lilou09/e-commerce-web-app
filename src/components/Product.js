import React from "react";
import "../style/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">{price} DA</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product-img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
