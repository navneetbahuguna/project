import axios from "axios";

export const getDataService = () => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  return axios({
    method: "GET",
    url: "http://localhost:4002/NBProject",

    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response.data;
    });
};
