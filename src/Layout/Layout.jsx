import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Sidebar proShow={props.setProShow} />
      {props.children}
      <Header
        setLayoutStyle={props.setLayoutStyle}
        proShow={props.setProShow}
        onRun={props.onRun}
      />
    </>
  );
}

export default Layout;
