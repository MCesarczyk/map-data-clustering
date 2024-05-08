import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { BaseMap } from '@mdc/map';
import { Marker } from '@mdc/data';
import { MarkersDynamicallyGenerated } from '../features';
import { faker } from '@faker-js/faker';

export const dynamicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dynamic',
  component: Dynamic,
});

function Dynamic() {
  const markers: Marker[] = [];
  for (let i = 0; i < 10000; i++) {
    markers.push({
      lng: -122.673447 + Math.random() * 200.0,
      lat: 45.5225581 - 60 + Math.random() * 80,
      name: faker.airline.airport().name,
      iata_faa: faker.airline.airport().iataCode,
      city: faker.location.city(),
      icao: faker.airline.recordLocator(),
      alt: faker.number.int({ min: 0, max: 10000 }),
      tz: faker.location.timeZone(),
    });
  }

  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <MarkersDynamicallyGenerated markers={markers} />
    </BaseMap>
  );
}
