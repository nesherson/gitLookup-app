import { User, Repo, Activity } from '../types';

const URL = 'https://api.github.com/users/';
const MAX_REPOS = 100;

const get = async (url: string): Promise<Response> => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(response.statusText);
  
  return response;
}

export const getUser = async (username: string): Promise<User> => {
  const response = await get(`${URL}${username}`);

  return response.json();
}

export const getRepos = async (username: string): Promise<Repo> => {
  const response = await get(`${URL}${username}/repos?per_page=${MAX_REPOS}`);

  return response.json();
}

export const getActivities = async (username: string): Promise<Activity[]> => {
  const response = await fetch(`${URL}${username}/events`);

  return response.json();
}

