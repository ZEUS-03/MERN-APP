import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={{
        enterActive: `translate-x-full transition duration-200 transform ease-in-out sm:translate-x-0 ${
          props.show ? "" : "opacity-0"
        }`,
        enterDone: "",
        exit: `translate-x-full transition duration-200 transform ease-in-out sm:translate-x-0 ${
          props.show ? "" : "opacity-0"
        }`,
        exitActive: "",
        exitDone: "",
      }}
    >
      <aside
        className="fixed left-0 top-0 z-10 h-[100vh] w-[70%] bg-white shadow-md"
        onClick={props.onClick}
      >
        {" "}
        {props.children}{" "}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
