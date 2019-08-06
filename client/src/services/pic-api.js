import axios from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs/search?';
const API_KEY = '2avmiOWGNza4KPBO2fsDSt5oHN8vR168';

export default function fetchPics(inputVal, page) {
  const RESULT_URL = `${API_URL}api_key=${API_KEY}&q=${inputVal.toLowerCase()}&limit=15&offset=${page}&rating=PG&lang=en`;
  // const RESULT_URL = `${API_URL}q=${inputVal.toLowerCase()}&page=${page}&per_page=12&key=${API_KEY}`;
  return axios.get(RESULT_URL).then(response => response.data.data);
}
