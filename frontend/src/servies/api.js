import axios from "axios";
const BASE_URL = "http://localhost:4000/api";

export const createSession = async () => {
  const res = await axios.post(`${BASE_URL}/create-session`);
  return res.data;
};

export const getSession = async (uid) => {
  const res = await axios.get(`${BASE_URL}/get-session/${uid}`);
  return res.data;
};
