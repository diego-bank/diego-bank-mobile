import axios from 'axios';

const BASE_URL = 'https://bad7-2804-1b1-f943-9603-2c29-71ef-ed95-1fdb.ngrok-free.app';

export const api = axios.create({
    baseURL: BASE_URL,
});