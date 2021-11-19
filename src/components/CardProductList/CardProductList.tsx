import React from "react";
import { List, Car } from "../../constants/carsList";
import CardProduct from "../CardProduct/CardProduct";

const CardProductList = (props: List) => {
  const cards = props.cars.map((card: Car) => (
    <CardProduct
      title={card.title}
      description={card.description}
      price={card.price}
      key={card.id}
    />
  ));
  return <ul>{cards}</ul>;
};

export default CardProductList;
