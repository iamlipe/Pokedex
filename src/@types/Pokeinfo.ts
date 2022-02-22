export interface PokeInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  abilities: string[];
  pokemon_physical: {
    height: number;
    weight: number;
  };
  types: string[];
  stats: PokeStats[];
}

interface PokeStats {
  title: string;
  base_stat: number;
}
