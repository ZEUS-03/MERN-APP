import ReactDom from "react-dom";

const Backdrop = (props) => {
  return ReactDom.createPortal(
    <div
      className="fixed top-0 left-0 w-[100%] h-[100vh] bg-white bg-opacity-75 z-10"
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
