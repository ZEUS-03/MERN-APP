import React from "react";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const content = (
    <aside
      className="fixed left-0 top-0 z-10 h-[100vh] w-[70%] bg-white shadow-md"
      onClick={props.onClick}
    >
      {" "}
      {props.children}{" "}
    </aside>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
