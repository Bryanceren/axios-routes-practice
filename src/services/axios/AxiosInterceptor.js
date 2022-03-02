import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
export const AxiosInterceptor = () => {
  axios.interceptors.request.use(
    (request) => {
      const apiToken = sessionStorage.getItem("token");
      const isLoggedIn = apiToken;

      if (isLoggedIn) {
        request.headers.common.Authorization = `Bearer ${apiToken}`;
      }

      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response.status;
      if (
        status !== 401 ||
        (status === 401 && window.location.pathname === "/login")
      ) {
        return Promise.reject(error);
      } else {
        sessionStorage.removeItem("token");
        return Promise.reject(error);
      }
    }
  );
};
