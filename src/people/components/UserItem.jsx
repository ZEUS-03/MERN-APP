import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <Link to={`/${props.id}/places`}>
      <div className="group">
        <div className="p-4 flex justify-between bg-[#252525]  my-2 drop-shadow-md rounded-md group-hover:bg-[#ffcb00] transition-colors transition-delay-50 ">
          <img
            className="w-14 h-14 rounded-full mr-4"
            src={props.image}
            alt={props.name}
          />
          <ul className="list-none">
            <li className=" text-2xl text-[#ffcb00] group-hover:text-black">
              {props.name}
            </li>
            <li className="font-bold text-lg text-white group-hover:text-black">
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
export default UserItem;
