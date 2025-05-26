import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError, type AxiosRequestConfig } from "axios";


interface FetchData<T> {
  count: number;
  results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchData<T>>(endpoint, { signal: controller.signal, ...requestConfig } )
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, deps ?  [...deps] : []);
  return { data, error, isLoading };
};

export default useData;
