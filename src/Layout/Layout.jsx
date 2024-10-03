import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Sidebar />
      {props.children}
      <Header setLayoutStyle={props.setLayoutStyle} />
    </>
  );
}

export default Layout;
