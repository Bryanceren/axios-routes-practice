import axios from "axios";

const HttpClient = async (url, data = {}, method = "get") => {
  let config = {
    url,
    data,
    method,
  };
  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }
  try {
    return await axios(config);
  } catch (e) {}
};

export { HttpClient };
