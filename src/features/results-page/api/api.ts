import { User, Repo, Activity } from '../types';

const URL = 'https://api.github.com/users/';
const MAX_REPOS = 100;

export const GetUser = async (username: string): Promise<User> => {
  return await (await fetch(`${URL}${username}`)).json();
}

export const GetRepos = async (username: string): Promise<Repo> => {
  return await (await fetch(`${URL}${username}/repos?per_page=${MAX_REPOS}`)).json();
}

export const GetActivities = async (username: string): Promise<Activity> => {
  return await (await fetch(`${URL}${username}/events`)).json();
}

