import axios from "axios";

export const getDataService = (req) => {
  console.log("req", req);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3001");

  return axios({
    method: "GET",
    url:
      "https://infinite-wildwood-05252.herokuapp.com/NBProject/adminExtractAllData",

    headers: headers,
  })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((err) => {
      return err.response.data;
    });
};
