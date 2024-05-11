import { Map } from "leaflet";
import { useLayoutEffect, useRef, useState } from "react";

export const useMapGeometry = () => {
  const [bounds, setBounds] = useState<[number, number, number, number]>();
  const [zoom, setZoom] = useState(13);
  const mapRef = useRef<Map>(null);

  function updateMap() {
    const b = mapRef.current?.getBounds();
    b &&
      setBounds([
        b.getSouthWest().lng,
        b.getSouthWest().lat,
        b.getNorthEast().lng,
        b.getNorthEast().lat,
      ]);
    mapRef.current && setZoom(mapRef.current?.getZoom());
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      updateMap();
    });
  }, []);

  return { bounds, zoom, mapRef, updateMap };
};
