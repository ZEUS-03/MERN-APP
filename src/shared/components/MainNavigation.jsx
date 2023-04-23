import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <>
      {drawerIsOpen && (
        <Backdrop
          onClick={() => {
            setDrawerIsOpen(false);
          }}
        />
      )}
      {drawerIsOpen && (
        <SideDrawer
          onClick={() => {
            setDrawerIsOpen(false);
          }}
        >
          <h1 className="text-center font-bold text-xl mt-3">Dashboard</h1>
          <nav className="flex flex-col justify-center items-center h-full">
            <NavLinks className="flex-grow" />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <div className="flex">
          <button
            className="h-3 w-3 p-3 text-xl md:hidden"
            onClick={() => {
              setDrawerIsOpen(true);
            }}
          >
            <span className="">≡</span>
          </button>
          <Link to={"/"}>
            <h1 className="p-2 font-semibold ml-7">wanderer.com</h1>
          </Link>
        </div>
        <nav className="hidden md:flex justify-around text-md font-semibold">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
