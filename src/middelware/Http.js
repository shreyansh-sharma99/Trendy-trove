import { CONST } from "./Const";

const httpPost = async (url, params) => {
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // "Authorization": authHeader().Authorization
  };
  const result = fetch(CONST.BACKEND_URL + url);
};
