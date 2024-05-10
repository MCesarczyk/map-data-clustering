import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { faker } from '@faker-js/faker';
import 'leaflet.markercluster/dist/leaflet.markercluster';

const markersLength = 8000;

// @ts-expect-error (@typescript-eslint/ban-ts-comment)
const markerClusters = L.markerClusterGroup();

export const MarkersDynamicallyGenerated = () => {
  const map = useMap();

  useEffect(() => {
    console.log('Markers number: ', markersLength);
    const start = window.performance.now();
    markerClusters.clearLayers();

    for (let i = 0; i < markersLength; ++i) {
      const popup =
        faker.airline.airport().name +
        '<br/>' +
        faker.location.city() +
        '<br/><b>IATA/FAA:</b> ' +
        faker.airline.airport().iataCode +
        '<br/><b>ICAO:</b> ' +
        faker.airline.recordLocator() +
        '<br/><b>Altitude:</b> ' +
        Math.round(faker.number.int({ min: 0, max: 10000 }) * 0.3048) +
        ' m' +
        '<br/><b>Timezone:</b> ' +
        faker.location.timeZone();

      const m = L.marker([
        45.5225581 - 60 + Math.random() * 80,
        -122.673447 + Math.random() * 200.0,
      ]).bindPopup(popup);

      markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);
    const end = window.performance.now();
    console.log(`Time of adding markers and clusters: ${end - start}ms`);
  }, [map]);
  return null;
};
