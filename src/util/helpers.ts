import { Repo } from "src/types";

export const parseDate = (date: string, locale: string, options: object) => {
  return new Date(date).toLocaleDateString(locale, options);
};

export const timeSince = (date: Date): string => {
  let seconds = Math.floor((new Date().getMilliseconds() - date.getMilliseconds()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

export const getCount = (repos: Repo[]) => {
  return repos.reduce((acc, repo) => (acc += repo.stargazers_count), 0);
};

export const getSearchQuery = (str: string) => {
  return str ? str.slice(1) : '';
};
