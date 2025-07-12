// src/instance.js
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://app-p10h.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});



export default instance;