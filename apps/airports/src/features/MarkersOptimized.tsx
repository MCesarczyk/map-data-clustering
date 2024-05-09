import { BaseMap } from '@mdc/map';

export const MarkersOptimized = () => {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    ></BaseMap>
  );
};
