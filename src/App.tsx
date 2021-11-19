import React, { useState } from "react";
import Button from "./components/Button/Button";
import CardProductList from "./components/CardProductList/CardProductList";
import { carsList } from "./constants/carsList";

const App = () => {
  const [active, setIndex] = useState(0);
  const getCars = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const index = Number(target.getAttribute("data-type"));
    setIndex(index);
  };
  const buttons = carsList.map((item, index) => (
    <Button type={index} key={item.id} title={item.mark} onClick={getCars} />
  ));
  return (
    <div>
      <div className="wrapper-btn">{buttons}</div>
      <div>
        <CardProductList {...carsList[active]} />
      </div>
    </div>
  );
};

export default App;
