import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";
// const pokeImageAPIBaseURL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

export const pokeAPI = axios.create({ baseURL });
// export const pokeImageAPI = axios.create({ baseURL: pokeImageAPIBaseURL });
