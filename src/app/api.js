import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    TokenCyberSoft: process.env.REACT_APP_CYBERSOFT_TOKEN,
    // => Để Authorization ở đây, thì khi user chưa đăng nhập thì các resquest Authorization  không có

    // Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

// Khi có resquest  , luôn đính Authorization vào
requester.interceptors.request.use(
  (req) => {
    req.headers = {
      ...req.headers,
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default requester;
