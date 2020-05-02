import axios from "axios";

export const getDataService = (req) => {
  console.log("req", req.data);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3001");
  const params = new URLSearchParams();
  params.append("name", req.name);
  params.append("email", req.email);

  return axios({
    method: "POST",
    url: " https://infinite-wildwood-05252.herokuapp.com/NBProject/adminSignup",
    data: req,
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response.data;
    });
};
