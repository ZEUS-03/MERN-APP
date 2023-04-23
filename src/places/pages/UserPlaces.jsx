import React from "react";
import { useParams } from "react-router-dom";

import PlacesList from "../components/PlacesList";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th st, New York, NY 100011",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th st, New York, NY 100011",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const filteredPlaces = DUMMY_DATA.filter((place) => place.creator === userId);
  return <PlacesList items={filteredPlaces} />;
};

export default UserPlaces;
