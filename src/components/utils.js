import axios from 'axios';

const baseURL = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`;
export const SmartPlantBackend = axios.create({
  baseURL,
  withCredentials: true,
});