import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const getCampersAsync = async (page, limit, filters) => {
  const { data } = await axios.get("campers", {
    params: {
      ...filters,
      page,
      limit,
    },
  });
  return data;
};

export const getCamperByIdAsync = async (camperId) => {
  const { data } = await axios.get(`campers/${camperId}`);
  return data;
};
