import useData from "./useData";
import type { Genres } from "./useGenre";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genres | null, selectedPlatform: Platforms | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id])

export default useGames;
