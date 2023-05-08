import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "600" : "normal",
      // color: isActive ? "#ffaa49" : "black",
      backgroundColor: isActive ? "rgba(255, 203, 0, .7)" : "",
      borderRadius: "20px",
    };
  };
  return (
    <>
      <NavLink to={"/"} style={navLinkStyles} exact="true">
        <li className=" list-none p-2 ">All Users</li>
      </NavLink>
      <NavLink to={"/u1/places"} style={navLinkStyles}>
        <li className=" list-none p-2  ">My Places</li>
      </NavLink>
      <NavLink to={"/places/new"} style={navLinkStyles}>
        <li className=" list-none p-2  ">Add Places</li>
      </NavLink>
      <NavLink to={"/auth"} style={navLinkStyles}>
        <li className=" list-none p-2 ">Authenticate</li>
      </NavLink>
    </>
  );
};

export default NavLinks;
