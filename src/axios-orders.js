import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-a8ae7.firebaseio.com/",
});

export default instance;
