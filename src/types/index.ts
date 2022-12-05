export type User = {
    name: string,
    avatar_url: string,
    html_url: string,
    blog: string,
    followers: number
    following: number
    created_at: string,
    updated_at: string,
    location: string,
    repo_count: number,
    fetchedAt: string
}

export type UserJsonResponse = {
    data?: User,
    errors?: Array<{ message: string }>
}

export type Repo = {
    language: any;
    stargazers_count: number;
}

export type Activity = {
    id: number,
    author: string,
    type: string,
    name: string,
    repo: string,
    payload: Payload,
    created_at: string,
}

export type Payload =  {
    comment: any,
    issue: any,
    size: number,
    ref_type: string,
    ref: string,
    pull_request: any,
  }
