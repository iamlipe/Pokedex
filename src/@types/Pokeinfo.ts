export interface PokeInfo {
  id: string;
  name: string;
  image: string;
  abilities: string[];
  pokemon_physical: {
    height: number;
    weight: number;
  };
  types: string[];
  stats: PokePhysical[];
}

interface PokePhysical {
  name: string;
  weight: string;
}
