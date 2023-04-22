import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="hidden md:flex justify-around text-md font-semibold">
      <li className="mx-2 hover:text-[#322f0dc7]">
        <NavLink to={"/"} exact="true">
          All Users
        </NavLink>
      </li>
      <li className="mx-2 hover:text-[#322f0dc7]">
        <NavLink to={"/u1/places"}>My Places</NavLink>
      </li>
      <li className="mx-2 hover:text-[#322f0dc7]">
        <NavLink to={"/places/new"}>Add Places</NavLink>
      </li>
      <li className="mx-2 hover:text-[#322f0dc7]">
        <NavLink to={"/auth"}>Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
