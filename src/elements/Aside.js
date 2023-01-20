import React from "react";
import propTypes from "prop-types";

export default function Aside(props) {
  const className = ["menu-sidebar"];

  if (props.isDnone) className.push("d-none");
  if (props.isDlgblock) className.push("d-lg-block");
  return <aside className={className.join(" ")}>{props.children}</aside>;
}

Aside.propTypes = {
  isDnone: propTypes.bool,
  isDlgblock: propTypes.bool,
};
