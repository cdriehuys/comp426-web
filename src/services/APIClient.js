/**
 * Client for interacting with the API.
 */

import axios from 'axios';


const getAuthHeaders = token => ({ Authorization: `Token ${token}` });


class APIClient {
  static API_ROOT = 'https://api.ultimanager.com';
  static TEAM_MANAGMENT_ROOT = `${APIClient.API_ROOT}/team-management`;

  static createGame = (token, teamId, game) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/${teamId}/games/`;

    return axios.post(url, game, { headers: getAuthHeaders(token) })
      .then(response => response.data);
  };

  static createPlayer = (token, teamId, player) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/${teamId}/players/`;

    return axios.post(url, player, { headers: getAuthHeaders(token) })
      .then(response => response.data);
  };

  static createTeam = (token, team) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/`;

    return axios.post(url, team, { headers: getAuthHeaders(token) })
      .then(response => response.data);
  };

  static getProfile = (token) => {
    const url = `${APIClient.API_ROOT}/account/profile/`;

    return axios.get(url, { headers: getAuthHeaders(token) })
      .then(response => response.data)
  };

  static getTeam = (teamId) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/${teamId}/`;

    return axios.get(url).then(response => response.data);
  };

  static getTeamGames = (teamId) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/${teamId}/games/`;

    return axios.get(url).then(response => response.data);
  };

  static getTeamPlayers = (teamId) => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/${teamId}/players/`;

    return axios.get(url).then(response => response.data);
  };

  static getTeams = () => {
    const url = `${APIClient.TEAM_MANAGMENT_ROOT}/teams/`;

    return axios.get(url).then(response => response.data);
  };

  static login = (username, password) => {
    const url = `${APIClient.API_ROOT}/auth/login/`;

    return axios.post(url, { username, password }).then(response => response.data);
  };

  static register = (username, password) => {
    const url = `${APIClient.API_ROOT}/account/register/`;

    return axios.post(url, { username, password }).then(response => response.data);
  };
}


export default APIClient;
