import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/Modal";
import Map from "../../shared/components/Map";

const PlacesItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        footer={
          <button
            className="mx-2 my-2 px-3 py-1 bg-[#b81c0e] hover:bg-[#fe002f] font-medium text-md text-white rounded-sm "
            onClick={closeMapHandler}
          >
            CLOSE
          </button>
        }
        className="fixed w-[80%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg bg-white z-20 border-2 border-black rounded-lg "
        headerClass="font-semibold bg-orange-300 w-full text-lg rounded-t-md text-center p-3 "
        footerClass="justify-center"
      >
        <div className="w-full m-2 h-[30vh]">
          <Map center={props.coordinates} />
        </div>
      </Modal>
      <li className="w-[40%] rounded-md bg-[#fde2cd] m-3">
        <img
          className="w-[100%] h-auto p-2 rounded-lg"
          src={props.image}
          alt={props.title}
        />
        <div className="flex flex-col justify-center items-center p-2 border-b-2 border-gray-300">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <h2 className="text-lg font-semibold">{props.address}</h2>
          <p className="text-lg p-1">{props.description}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center my-2">
          <button
            className="mx-2 my-2 px-3 py-1 border border-[#cc183a] hover:bg-[#cc183a]  font-medium  hover:text-white text-md text-[#cc183a] rounded-sm"
            onClick={openMapHandler}
          >
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
    </>
  );
};

export default PlacesItem;
