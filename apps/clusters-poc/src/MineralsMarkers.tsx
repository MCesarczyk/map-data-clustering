import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import { generateSampleJson } from './generateJson';

// @ts-expect-error (@typescript-eslint/ban-ts-comment)
const markerClusters = L.markerClusterGroup();

export const MineralsMarkers = () => {
  const map = useMap();

  const markers = generateSampleJson();

  useEffect(() => {
    console.log('Minerals markers number: ', markers.length);
    const start = window.performance.now();
    markerClusters.clearLayers();

    for (let i = 0; i < markers.length; ++i) {
      const popup =
        markers[i].properties.name +
        '<br/>' +
        '<br/><b>Value:</b> ' +
        markers[i].properties.value.toFixed(3);

      const m = L.marker([
        markers[i].geometry.coordinates[0],
        markers[i].geometry.coordinates[1],
      ]).bindPopup(popup);

      markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);
    const end = window.performance.now();
    console.log(
      `Time of adding airports markers and clusters: ${end - start}ms`
    );

    return () => {
      map.removeLayer(markerClusters);
    };
  }, [map, markers]);
  return null;
};
