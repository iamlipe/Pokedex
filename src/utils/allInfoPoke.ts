import { pokeAPI } from "../services/api";
import { PokeInfo } from "../@types/PokeInfo";
import { reWriteStringNoWordBreak } from "./reWriteStringNoWordBreak";
import { abbreviateStat } from "./abbreviateStat";

export async function allInfoPoke({
  ids = null,
  search = null,
}): Promise<PokeInfo[] | string[]> {
  console.log(search);

  const allInfoAboutPokemons = [ids || search][0].map(async (id: string) => {
    try {
      const {
        data: { name, abilities, height, weight, types, stats, id: idPoke },
      } = await pokeAPI.get(`/pokemon/${id || search}`);
      const {
        data: { flavor_text_entries },
      } = await pokeAPI.get(`/pokemon-species/${id || search}`);

      const allInfoAboutOnePokemon: PokeInfo = {
        id: idPoke,
        name,
        description: reWriteStringNoWordBreak(
          flavor_text_entries[9].flavor_text.split("\n")
        ),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPoke}.svg`,
        abilities: abilities.map(({ ability }) => ability.name),
        pokemon_physical: {
          height: height / 10,
          weight: weight / 10,
        },
        types: types.map(({ type }) => type.name),
        stats: stats.map((statistic: any) => {
          return {
            title: abbreviateStat(statistic.stat.name),
            base_stat: statistic.base_stat,
          };
        }),
      };

      return allInfoAboutOnePokemon;
    } catch (error) {
      if (error.response.data === "Not Found" && search) {
        return error.response.data;
      }

      // eslint-disable-next-line no-console
      console.error(error);
    }
  });

  const result = await Promise.all(allInfoAboutPokemons);

  return result;
}
