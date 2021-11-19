import React from "react";
import "./button.css";
interface Props {
  type: number;
  title: string;
  onClick: (event: React.SyntheticEvent) => void;
}
const Button = (props: Props) => {
  return (
    <button data-type={props.type} onClick={props.onClick}>
      {props.title}
    </button>
  );
};
export default Button;
