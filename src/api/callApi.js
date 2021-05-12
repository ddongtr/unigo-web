import { url } from "./url";
import { getSession } from "../utils/store";

const callApi = async (params) => {
  const token = await getSession();
  var requestOptions;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  var raw = JSON.stringify(params.param);

  if (params.method === "POST") {
    requestOptions = {
      method: params.method,
      headers: myHeaders,
      body: raw,
    };
  } else {
    requestOptions = {
      method: params.method,
      headers: myHeaders,
    };
  }

  let mergeURL = url + params.command;

  if (params.username) {
    mergeURL += "/" + params.username;
  }

  if (params.search) {
    mergeURL += "/" + params.search;
  }

  return fetch(mergeURL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default callApi;
