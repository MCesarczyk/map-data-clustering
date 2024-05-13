import { BaseMap } from '@mdc/map';
import { MineralsMarkers } from '../MineralsMarkers';

export function App() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      center={[-33.1, 146.6]}
      zoom={4}
    >
      <MineralsMarkers />
    </BaseMap>
  );
}

export default App;
