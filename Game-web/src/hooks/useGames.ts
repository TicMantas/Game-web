import { useEffect, useState } from "react";
import apiClient from "../Service/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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



// Custom made hook to take everything we need from the API to disegn the website as we need :D
const useGames = () => useData<Game>("/games")

export default useGames;
