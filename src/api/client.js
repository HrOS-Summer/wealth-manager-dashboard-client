import axios from "axios";

const api = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
timeout: 10000,
});

api.interceptors.response.use(
(res) => res,
(err) => {
const msg = err?.response?.data?.error || err.message || "Request failed";
return Promise.reject(new Error(msg));
}
);

export default api;