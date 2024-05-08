import { BaseMap } from '@mdc/map';
import { Markers } from './Markers';

export function App() {
  return (
    <div>
      <h1>Airports worldwide</h1>
      <BaseMap apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY} height={800}>
        <Markers />
      </BaseMap>
    </div>
  );
}

export default App;
