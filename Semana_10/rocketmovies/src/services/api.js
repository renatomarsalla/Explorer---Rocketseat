import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:3333"
  baseURL: "https://rocketmovies-api-renato.herokuapp.com"
});

export { api };