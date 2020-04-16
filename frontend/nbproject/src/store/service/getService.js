import axios from "axios";

export const getDataService = () => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  return axios
    .get("http://localhost:4002/NBProject")
    .then((response) => {
      // return response;
      console.log("response", response);
    })
    .catch((err) => {
      return err.response.data;
    });
};
