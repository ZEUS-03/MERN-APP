import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.mappls.Map({
      container: mapRef.current,
      center: props.center,
    });
  }, []);

  return <div ref={mapRef} className="w-full h-full"></div>;
};

export default Map;
