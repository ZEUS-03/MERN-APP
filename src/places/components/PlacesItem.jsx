import React from "react";
import { Link } from "react-router-dom";

const PlacesItem = (props) => {
  return (
    <li className="w-[40%] rounded-md bg-[#fde2cd] m-3">
      <img
        className="w-[100%] h-auto p-2 rounded-lg"
        src={props.image}
        alt={props.title}
      />
      <div className="flex flex-col justify-center items-center p-2 border-b-2 border-gray-300">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <h2 className="text-lg font-semibold">{props.address}</h2>
        <p className="text-lg">{props.description}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="mx-2 my-2 px-3 py-1 border border-[#cc183a] hover:bg-[#cc183a]  font-medium  hover:text-white text-md text-[#cc183a] rounded-sm">
          VIEW ON MAP
        </button>
        <Link to={`places/${props.id}`}>
          <button className="mx-2 my-2 px-3 py-1 bg-[#ce2242] hover:bg-[#ff0e3a] font-medium text-md text-white rounded-sm">
            EDIT
          </button>
        </Link>
        <button className="mx-2 my-2 px-3 py-1 bg-[#b81c0e] hover:bg-[#fe002f] font-medium text-md text-white rounded-sm">
          DELETE
        </button>
      </div>
    </li>
  );
};

export default PlacesItem;
