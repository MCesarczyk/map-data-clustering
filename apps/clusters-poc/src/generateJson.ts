import { faker } from '@faker-js/faker';
import { MineralPoint } from './types';

const generateRandomPoints = (count: number, minLat: number, minLng: number, maxLat: number, maxLng: number) => {
  const points: MineralPoint[] = [];
  for (let i = 0; i < count; i++) {
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;
    points.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lat, lng]
      },
      properties: {
        name: faker.science.chemicalElement().name,
        value: faker.number.float({ min: 1, max: 20 })
      }
    });
  }
  return points;
}

export const generateSampleJson = () => {
  const minLng = 144.8353781600000048, minLat = -36.2421714299999991, maxLng = 148.4593477610000036, maxLat = -30.0357289409999986;
  const pointCount = 1000;
  return generateRandomPoints(pointCount, minLat, minLng, maxLat, maxLng);
}
