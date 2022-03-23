import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

export const pokeAPI = axios.create({ baseURL });
