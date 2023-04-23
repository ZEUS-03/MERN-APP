import React from "react";
import PlacesItem from "./PlacesItem";

const PlacesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center bg-orange-200 my-3 w-[40%] mx-auto p-3 rounded-lg ">
        <h1 className="text-xl font-bold">
          No places found for the user! Maybe create one?
        </h1>
        <button className="bg-orange-400 p-1 my-2 rounded-lg hover:bg-orange-300">
          Share Place
        </button>
      </div>
    );
  }
  return (
    <ul className="flex flex-col justify-center items-center">
      {props.items.map((place) => (
        <PlacesItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
