/**
 * Client for interacting with the API.
 */

import axios from 'axios';


class APIClient {
  static API_ROOT = 'https://api.ultimanager.com';

  static login = (username, password) => {
    const url = `${APIClient.API_ROOT}/auth/login/`;

    return axios.post(url, { username, password }).then(response => response.data);
  }
}


export default APIClient;
