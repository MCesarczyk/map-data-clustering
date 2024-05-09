import useSwr from 'swr';
import { BaseMap } from '@mdc/map';
import { useEffect } from 'react';

interface CrimeDto {
  category: string;
  location_type: string;
  location: {
    latitude: string;
    street: {
      id: number;
      name: string;
    };
    longitude: string;
  };
  context: string;
  outcome_status: null;
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
}

interface Crime {
  type: 'Feature';
  properties: {
    cluster: false;
    crimeId: number;
    category: string;
  };
  geometry: { type: 'Point'; coordinates: number[] };
}

const url =
  'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2024-03';

const fetcher = (...args: [RequestInfo | URL, RequestInit | undefined]) =>
  fetch(...args).then((response) => response.json());

export const MarkersOptimized = () => {
  const { data, error } = useSwr(url, { fetcher });
  const crimes: CrimeDto[] = data && !error ? data : [];
  const points: Crime[] = crimes.map((crime) => ({
    type: 'Feature',
    properties: { cluster: false, crimeId: crime.id, category: crime.category },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
    },
  }));

  useEffect(() => {
    console.log(points);
  }, [points]);

  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    ></BaseMap>
  );
};
