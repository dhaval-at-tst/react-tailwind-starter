import axios from "axios";
import CONSTANT from "../utils/constants";
import store from "./../store/index";

const state = store.getState();
console.log("..", state);

export const Services = axios.create({
  baseURL: CONSTANT.BASE_URL,
  headers: {
    Accept: "application/json",
    // Authorization: "Bearer " + localStorage.getItem("authToken"),
    Authorization: "Bearer " + state.auth.authToken,
  },
});
