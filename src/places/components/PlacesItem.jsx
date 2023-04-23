import React from "react";

const PlacesItem = (props) => {
  return (
    <li className="w-[50%] rounded-md bg-[#fde2cd] m-3">
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
        <button className="mx-2 my-2 p-1 bg-orange-400 text-sm text-white rounded-md">
          View on Map
        </button>
        <button className="mx-2 my-2 p-1 bg-orange-400 text-sm text-white rounded-md">
          Edit
        </button>
        <button className="mx-2 my-2 p-1 bg-red-400 text-sm text-white rounded-md">
          DELETE
        </button>
      </div>
    </li>
  );
};

export default PlacesItem;
