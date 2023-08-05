import axios from 'axios';

const BASE_URL = "http://localhost:8001/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjUzY2Q2NWFmOTU2ZWM3MTBjNTVkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDg3Nzc4NiwiZXhwIjoxNjkxMTM2OTg2fQ.o4l00vWOWjokmZSslMPXf2eZWepTaRxDpiwcbWY50G8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})