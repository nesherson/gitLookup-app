export type User = {
  name: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  location: string;
  repo_count: number;
  fetchedAt: string;
};

export type UserJsonResponse = {
  data?: User;
  errors?: Array<{ message: string }>;
};

export type Repo = {
  language: any;
  stargazers_count: number;
};

export type Activity = {
  id: number;
  actor: ActivityActor;
  type: string;
  name: string;
  repo: ActivityRepo;
  payload: Payload;
  created_at: string;
};

type ActivityRepo = {
  id: number,
  name: string,
  url: string
}

type ActivityActor = {
  login: string
}

export type Payload = {
  comment: any;
  issue: any;
  size: number;
  ref_type: string;
  ref: string;
  pull_request: any;
};

export type RelativeTimeFormatUnit =
  | "year"
  | "years"
  | "quarter"
  | "quarters"
  | "month"
  | "months"
  | "week"
  | "weeks"
  | "day"
  | "days"
  | "hour"
  | "hours"
  | "minute"
  | "minutes"
  | "second"
  | "seconds";

export type Interval = {
  ge: number;
  divisor: number;
  unit?: RelativeTimeFormatUnit;
  text?: string;
};
