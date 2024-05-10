export interface CrimeDto {
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

export interface Crime {
  type: 'Feature';
  properties: {
    cluster: false;
    crimeId: number;
    category: string;
  };
  geometry: { type: 'Point'; coordinates: number[] };
}
