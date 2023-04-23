import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <>
      <li className=" list-none p-3 font-semibold hover:text-[#322f0dc7]">
        <NavLink to={"/"} exact="true">
          All Users
        </NavLink>
      </li>
      <li className=" list-none p-3 font-semibold hover:text-[#322f0dc7]">
        <NavLink to={"/u1/places"}>My Places</NavLink>
      </li>
      <li className=" list-none p-3 font-semibold hover:text-[#322f0dc7]">
        <NavLink to={"/places/new"}>Add Places</NavLink>
      </li>
      <li className=" list-none p-3 font-semibold hover:text-[#322f0dc7]">
        <NavLink to={"/auth"}>Authenticate</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
