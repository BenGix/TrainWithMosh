import { useState, useEffect } from "react";
import apiClient from "../servieces/api-client";
import {
  Axios,
  AxiosProxyConfig,
  AxiosRequestConfig,
  CanceledError,
} from "axios";

interface FetchRespons<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchRespons<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })

        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
