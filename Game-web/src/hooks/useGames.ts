import { useEffect, useState } from "react";
import apiClient from "../Service/api-client";

export interface Platforms {
    id: number
    name: string
    slug: string
}

import { CanceledError } from "axios";
// from this interface we take everything what we need to make a game card and other feathure
// its the same properties as in the API website
export interface Game {
  id: number; // for game id
  name: string; // its a game name
  background_image: string; // this is for the image
  parent_platforms: {platform: Platforms}[]
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}; 

export default useGames;
