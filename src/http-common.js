import axios from "axios";

export default axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
    //'Access-Control-Allow-Origin': "*"
  },
});