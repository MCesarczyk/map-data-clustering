import { type ReactNode } from 'react';
import { MapContainer } from 'react-leaflet';
import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';
import { LatLngTuple } from 'leaflet';

const initialPosition = [51.505, -0.09] satisfies LatLngTuple;
const initialZoom = 13;
const mapStyle = 'OSM:DarkGray';

interface BaseMapProps {
  center?: LatLngTuple;
  zoom?: number;
  height?: number;
  children?: ReactNode;
}

export const BaseMap = ({ center, zoom, height, children }: BaseMapProps) => {
  return (
    <MapContainer
      style={{ minHeight: `${height || 500}px`, width: '100%', zIndex: 100 }}
      center={center || initialPosition}
      zoom={zoom || initialZoom}
      scrollWheelZoom={true}
    >
      <VectorBasemapLayer
        apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
        name={mapStyle}
      />
      {children}
    </MapContainer>
  );
};
