/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Marker } from '@mdc/data';

// @ts-ignore
const markerClusters = L.markerClusterGroup();
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
});

export const MarkersDynamicallyGenerated = ({
  markers,
}: {
  markers: Marker[];
}) => {
  const map = useMap();

  useEffect(() => {
    console.log('Markers number: ', markers.length);
    const start = window.performance.now();
    markerClusters.clearLayers();
    markers.forEach(({ lat, lng }) =>
      L.marker(new L.LatLng(lat, lng), {
        icon: customIcon,
      }).addTo(markerClusters)
    );

    map.addLayer(markerClusters);
    const end = window.performance.now();
    console.log(`Time of adding markers and clusters: ${end - start}ms`);
  }, [markers, map]);
  return null;
};
