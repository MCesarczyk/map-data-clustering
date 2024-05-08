import { type ReactNode } from 'react';
import { MapContainer } from 'react-leaflet';
import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';
import { LatLngTuple } from 'leaflet';

const initialPosition = [51.505, -0.09] satisfies LatLngTuple;
const initialZoom = 13;
const mapStyle = 'OSM:DarkGray';

interface BaseMapProps {
  apiKey: string;
  center?: LatLngTuple;
  zoom?: number;
  height?: number;
  width?: number;
  children?: ReactNode;
}

export const BaseMap = ({
  apiKey,
  center,
  zoom,
  height,
  width,
  children,
}: BaseMapProps) => {
  return (
    <MapContainer
      style={{
        minHeight: `${height || 500}px`,
        width: `${width || 100}%`,
        zIndex: 100,
      }}
      center={center || initialPosition}
      zoom={zoom || initialZoom}
      maxZoom={20}
      scrollWheelZoom={true}
    >
      <VectorBasemapLayer apiKey={apiKey} name={mapStyle} />
      {children}
    </MapContainer>
  );
};
