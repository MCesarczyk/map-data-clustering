import useSwr from 'swr';
import { BaseMap } from '@mdc/map';
import { useEffect, useRef, useState } from 'react';
import { Map } from 'leaflet';
import useSupercluster from 'use-supercluster';
import { Marker, Popup, useMapEvent } from 'react-leaflet';

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

const MapEventWatcher = ({ onMoveEnd }: { onMoveEnd?: () => void }) => {
  useMapEvent('moveend', onMoveEnd);

  return null;
};

export const MarkersOptimized = () => {
  const [bounds, setBounds] = useState<[number, number, number, number]>();
  const [zoom, setZoom] = useState(13);
  const mapRef = useRef<Map>(null);

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

  function updateMap() {
    const b = mapRef.current?.getBounds();
    b &&
      setBounds([
        b.getSouthWest().lng,
        b.getSouthWest().lat,
        b.getNorthEast().lng,
        b.getNorthEast().lat,
      ]);
    mapRef.current && setZoom(mapRef.current?.getZoom());
  }

  useEffect(() => {
    updateMap();
  }, [mapRef.current]); // eslint-disable-line react-hooks/exhaustive-deps

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const zoomToCluster = (
    clusterId: string | number | undefined,
    latitude: number,
    longitude: number
  ) => {
    if (!supercluster || !clusterId) return;

    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(Number(clusterId)),
      17
    );

    mapRef.current?.setView([latitude, longitude], expansionZoom, {
      animate: true,
    });
  };

  return (
    <BaseMap
      ref={mapRef}
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      center={[52.63, -1.135171]}
      zoom={10}
    >
      <MapEventWatcher onMoveEnd={updateMap} />
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster } = cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
            >
              <Popup>
                <p
                  className="text-center text-lg font-bold text-blue-700 !m-0 cursor-pointer"
                  onClick={() => zoomToCluster(cluster.id, latitude, longitude)}
                >
                  Crimes: {cluster.properties.point_count_abbreviated}
                </p>
              </Popup>
            </Marker>
          );
        }

        return (
          <Marker
            key={`crime-${cluster.properties.crimeId}`}
            position={[latitude, longitude]}
          >
            <Popup>
              <p className="text-center text-lg font-bold text-red-700 !m-0">
                Crime: {cluster.properties.category}
              </p>
            </Popup>
          </Marker>
        );
      })}
    </BaseMap>
  );
};
