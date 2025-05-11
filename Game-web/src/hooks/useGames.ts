import { useEffect, useState } from "react";
import apiClient from "../Service/api-client";
import { CanceledError } from "axios";

// An inteface Platforms let us see what Platforms can be used for that specific game
export interface Platforms {
  id: number
  name: string
  slug: string
}

// from this interface we take everything what we need to make a game card and other features
// its the same properties as in the API website
// let me take the data from the api to design game cards
export interface Game {
  id: number; // for game id
  name: string; // its a game name
  background_image: string; // this is for the image
  parent_platforms: {platform: Platforms}[]; // to display platforms 
  metacritic: number;// to display a critics of each game we fetching
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

// Custom made hook to take everything we need from the API to disegn the website as we need :D
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); // Loading is true when we uploading the games and its not showed on the page yet
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })// get all the games from the API
      .then((res) => {
        setGames(res.data.results);// then we get a response from the API with a result
        setLoading(false); // Loading is set to false when game is uploaded then it will remove loading from the page
  })
      .catch((err) => { // and then we catch an error if there is one while we fetching the data if we made a mistake for example
        // /xgames we will receive an error which means something is wrong while we fetching 
        if (err instanceof CanceledError) return;
        setLoading(false); // Loading will switch off when error occurs
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}; 

export default useGames;
