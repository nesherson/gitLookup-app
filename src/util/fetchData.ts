import { User, Repo, Activity } from "src/types";

const url = "https://api.github.com/users/";

export async function fetchUser(username: string): Promise<User> {
  const response = await fetch(`${url}${username}`);

  if (response.ok) {
    const user: User = await response.json();

    if (user) return user;
    else
      return Promise.reject(
        new Error(`No user with the username "${username}"`)
      );
  } else {
    const error = new Error(response.statusText);
    return Promise.reject(error);
  }
}

export async function fetchRepos(username: string): Promise<Repo[]> {
  const MAX_REPOS = 100;
  const urlToFetch = `${url}${username}/repos?per_page=${MAX_REPOS}`;

  const response = await fetch(urlToFetch);

  if (response.ok) {
    const repos: Repo[] = await response.json();

    if (repos) return repos;
    else
      return Promise.reject(
        new Error(`No repos for user with the username "${username}"`)
      );
  } else {
    const error = new Error(response.statusText);
    return Promise.reject(error);
  }
}

export async function fetchActivities(username: string) {
  const urlToFetch = `${url}${username}/events`;
  const response = await fetch(urlToFetch);

  if (response.ok) {
    const activities: Activity[] = await response.json();

    if (activities) return activities;
    else
      return Promise.reject(
        new Error(`No activities for user with the username "${username}"`)
      );
  } else {
    const error = new Error(response.statusText);
    return Promise.reject(error);
  }
}
