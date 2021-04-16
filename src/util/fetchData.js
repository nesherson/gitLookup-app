const url = 'https://api.github.com/users/';

export const fetchUser = async (username) => {
  return fetch(`${url}${username}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText, response.status);
    })
    .then((jsonResponse) => {
      const userData = {
        name: jsonResponse.name,
        avatar_url: jsonResponse.avatar_url,
        html_url: jsonResponse.html_url,
        blog: jsonResponse.blog ? jsonResponse.blog : '',
        followers: jsonResponse.followers,
        following: jsonResponse.following,
        created_at: jsonResponse.created_at,
        updated_at: jsonResponse.updated_at,
        location: jsonResponse.location,
      };

      return userData;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchRepos = async (username) => {
  const MAX_REPOS = 100;
  const urlToFetch = `${url}${username}/repos?per_page=${MAX_REPOS}`;
  return fetch(urlToFetch)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText, response.status);
    })
    .then((jsonResponse) => {
      return jsonResponse;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchActivities = async (username) => {
  const urlToFetch = `${url}${username}/events`;

  return fetch(urlToFetch)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText, response.status);
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      return jsonResponse.map((activity) => {
        return {
          id: activity.id,
          author: activity.repo.name,
          type: activity.type,
          name: activity.repo.name,
          repo: `https://github.com/${activity.repo.name}`,
          payload: activity.payload,
          created_at: new Date(activity.created_at).toLocaleDateString(
            undefined,
            {
              month: 'short',
              day: 'numeric',
            }
          ),
        };
      });
    })
    .catch((error) => {
      return error;
    });
};
