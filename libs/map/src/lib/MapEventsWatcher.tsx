import { useMapEvent } from 'react-leaflet';

export const MapEventWatcher = ({ onMoveEnd }: { onMoveEnd?: () => void }) => {
  useMapEvent('moveend', onMoveEnd);

  return null;
};
