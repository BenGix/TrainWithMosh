import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d6b0edbfbd7b400a88cb4fc1d650125a",
  },
});