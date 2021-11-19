import React from "react";
import "./cardProduct.css";
interface Props {
  title: string;
  description: string;
  price: number;
}
const CardProduct = (props: Props) => {
  return (
    <li>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-content">{props.description}</p>
      <p>{props.price}</p>
    </li>
  );
};
export default CardProduct;
