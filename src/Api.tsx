import axios from "axios";
const key = "c73a3343e7784ceca0202317220204&q";

export const api = axios.create({
    baseURL: `https://api.weatherapi.com/v1/current.json?key=${key}=`,
})