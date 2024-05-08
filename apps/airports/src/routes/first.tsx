import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { BaseMap } from '@mdc/map';
import { Marker } from '@mdc/data';
import { MarkersWithRemoveLayer } from '../features';

export const firstRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/first',
  component: First,
});

function First() {
  let markers: Marker[] = [];

  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 10000; i++) {
      markers.push({
        lng: -122.673447 + Math.random() * 200.0,
        lat: 45.5225581 - 60 + Math.random() * 80,
      } as Marker);
    }
  };

  addMarkers();

  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <MarkersWithRemoveLayer markers={markers} addMarkers={addMarkers} />
    </BaseMap>
  );
}
