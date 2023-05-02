import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapContainer = useRef(null);
  const { center } = props;

  useEffect(() => {
    const map = L.map(mapContainer.current).setView(
      [center.lat, center.lng],
      12
    );

    L.tileLayer(
      "https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=b68510c535msh23ff626d36ca4f3p17d5aejsn4c63ec837620",
      {
        maxZoom: 19,
      }
    ).addTo(map);

    const marker = L.marker([center.lat, center.lng]).addTo(map);
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
