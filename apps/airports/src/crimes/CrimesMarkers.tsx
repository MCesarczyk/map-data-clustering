import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useCrimesApi } from './api';

// @ts-expect-error (@typescript-eslint/ban-ts-comment)
const markerClusters = L.markerClusterGroup();

export const CrimesMarkers = () => {
  const map = useMap();
  const { points: markers } = useCrimesApi();

  useEffect(() => {
    console.log('Crimes markers number: ', markers.length);
    const start = window.performance.now();
    markerClusters.clearLayers();

    for (let i = 0; i < markers.length; ++i) {
      const popup = '<b>Crime:</b> ' + markers[i].properties.category;

      const m = L.marker([
        markers[i].geometry.coordinates[1],
        markers[i].geometry.coordinates[0],
      ]).bindPopup(popup);

      markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);
    const end = window.performance.now();
    console.log(`Time of adding crimes markers and clusters: ${end - start}ms`);

    return () => {
      map.removeLayer(markerClusters);
    };
  }, [map, markers]);
  return null;
};
