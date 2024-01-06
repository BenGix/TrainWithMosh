import { useState, useEffect } from "react";
import apiClient from "../servieces/api-client";
import { CanceledError } from "axios";

interface FetchRespons<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchRespons<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();   
  }, []);

  return { data, error, isLoading };
};

export default useData;
