import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Genres {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGenres {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
