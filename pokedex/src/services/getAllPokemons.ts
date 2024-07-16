import defaultAxiosClient from "./axiosClient";

const getAllPokemons = async () => {
  try {
    const response = await defaultAxiosClient.get("/api/v1/pokemons");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getAllPokemons;