import { API_URL, TOKEN } from '../const/api';

function callApi(endpoint) {
  return fetch(`${API_URL}${endpoint}&api_token=${TOKEN}`)
    .then(response => response.text())
    .catch(error => error);
}

export const fetchPersonsList = () => callApi('/persons?start=0');