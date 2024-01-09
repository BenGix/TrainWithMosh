import { useState, useEffect } from "react";
import apiClient from "../servieces/api-client";
import { CanceledError } from "axios";
import Genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => ({ data: Genres, isLoading: false, error: null });

export default useGenres;
