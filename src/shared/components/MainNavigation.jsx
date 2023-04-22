import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <div className="flex">
        <button className="h-3 w-3 text-xl md:hidden">
          <span className="">≡</span>
        </button>
        <Link to={"/"}>
          <h1 className="mx-2 font-semibold ml-7">wanderer.com</h1>
        </Link>
      </div>
      <NavLinks />
    </MainHeader>
  );
};

export default MainNavigation;
