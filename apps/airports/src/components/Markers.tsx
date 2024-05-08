/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { markers } from '@mdc/data';

export const Markers = () => {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore
    const markerClusters = L.markerClusterGroup();

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

      const m = L.marker(
        [markers[i].lat, markers[i].lng]
        //   , {
        //   icon: myIcon,
        // }
      ).bindPopup(popup);

      markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);

    return () => {
      map.removeLayer(markerClusters);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};