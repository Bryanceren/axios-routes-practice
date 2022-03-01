import axios from "axios";

export const AxiosInterceptor = () => {
  axios.interceptors.request.use(
    (request) => {
      const apiToken = sessionStorage.getItem("token");
      const isLoggedIn = apiToken;
      const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

      if (isLoggedIn && isApiUrl) {
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
