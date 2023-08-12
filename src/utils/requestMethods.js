import axios from 'axios';

const BASE_URL = "http://localhost:8001/";
const TOKEN =""
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser).accessToken;
console.log("---", TOKEN,JSON.parse(localStorage.getItem('persist:root')).currentUser)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})