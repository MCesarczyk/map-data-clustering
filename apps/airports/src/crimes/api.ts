import useSWR from "swr";
import { apiUrl } from "./constants";
import { Crime, CrimeDto } from "./types";

export const useCrimesApi = () => {
  const fetcher = (...args: [RequestInfo | URL, RequestInit | undefined]) =>
    fetch(...args).then((response) => response.json());

  const { data, error } = useSWR(apiUrl, { fetcher });
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

  return { points };
};
