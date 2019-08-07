import axios from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs/search?';
const API_KEY = '2avmiOWGNza4KPBO2fsDSt5oHN8vR168';

export function fetchPics(inputVal, page) {
  const RESULT_URL = `${API_URL}api_key=${API_KEY}&q=${inputVal.toLowerCase()}&limit=15&offset=${page}&rating=PG&lang=en`;
  return axios.get(RESULT_URL).then(response => response.data.data);
}

const BACKEND_URL = 'http://localhost:3113';

export function fetchCurrentUser() {
  const RESULT_URL = `${BACKEND_URL}/auth/current`;
  return axios.get(RESULT_URL).then(response => response.data.user);
}
