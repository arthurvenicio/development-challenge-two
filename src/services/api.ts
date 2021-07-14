import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://bz53u4ex1d.execute-api.us-east-2.amazonaws.com/dev',
    headers: {
        post: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    },
});
