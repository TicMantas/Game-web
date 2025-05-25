import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  background_image: string;
}

const useGenres = () => useData<Genres>('/genres')

export default useGenres;
