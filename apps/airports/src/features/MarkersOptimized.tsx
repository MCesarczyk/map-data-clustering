import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import useSupercluster from 'use-supercluster';
import { BaseMap, MapEventWatcher, useMapGeometry } from '@mdc/map';
import { useCrimesApi } from '../crimes/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: any = {};
const fetchIcon = (count: number, size: number) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }
  return icons[count];
};

export const MarkersOptimized = () => {
  const { bounds, zoom, mapRef, updateMap } = useMapGeometry();

  const { points } = useCrimesApi();

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
        const isCluster = cluster.properties.cluster;
        const pointCount = isCluster ? cluster.properties.point_count : 0;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + pointCount.toString().length * 10
              )}
              eventHandlers={{
                click: () => zoomToCluster(cluster.id, latitude, longitude),
              }}
            />
          );
        }

        return (
          <Marker
            key={`crime-${cluster.properties.crimeId}`}
            position={[latitude, longitude]}
          >
            <Popup>
              <p className="text-center text-base font-bold text-slate-900 !m-0">
                Crime: {cluster.properties.category}
              </p>
            </Popup>
          </Marker>
        );
      })}
    </BaseMap>
  );
};
