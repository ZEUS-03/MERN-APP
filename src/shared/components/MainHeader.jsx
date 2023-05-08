import React from "react";

const MainHeader = (props) => {
  return (
    <div className="p-3 text-lg flex justify-between bg-[#fff4ea] shadow-md">
      {props.children}
    </div>
  );
};
export default MainHeader;
