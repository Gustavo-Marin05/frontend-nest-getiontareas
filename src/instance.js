import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://app-p10h.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;