import React from "react";
import Header from "../components/Header/Header";

const Layout = (props) => {
  const arrayOfChildren = props.children.props.children;
  const notFound = arrayOfChildren[arrayOfChildren.length - 1];

  return (
    <div className="layout__container">
      <Header></Header>

      {props.children}
    </div>
  );
};

export default Layout;
