/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { markers } from '@mdc/data';
import 'leaflet.markercluster/dist/leaflet.markercluster';

// @ts-ignore
const markerClusters = L.markerClusterGroup();

export const MarkersStaticImported = () => {
  const map = useMap();

  useEffect(() => {
    console.log('Markers number: ', markers.length);
    const start = window.performance.now();
    markerClusters.clearLayers();

    for (let i = 0; i < markers.length; ++i) {
      const popup =
        markers[i].name +
        '<br/>' +
        markers[i].city +
        '<br/><b>IATA/FAA:</b> ' +
        markers[i].iata_faa +
        '<br/><b>ICAO:</b> ' +
        markers[i].icao +
        '<br/><b>Altitude:</b> ' +
        Math.round(markers[i].alt * 0.3048) +
        ' m' +
        '<br/><b>Timezone:</b> ' +
        markers[i].tz;

      const m = L.marker([markers[i].lat, markers[i].lng]).bindPopup(popup);

      markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);
    const end = window.performance.now();
    console.log(`Time of adding markers and clusters: ${end - start}ms`);

    return () => {
      map.removeLayer(markerClusters);
    };
  }, [map]);
  return null;
};
