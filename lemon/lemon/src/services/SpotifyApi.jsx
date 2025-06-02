const API_BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

// Fetch API Access Token
export const fetchAccessToken = () => {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  fetch("https://accounts.spotify.com/api/token", authParameters)
    .then((result) => result.json())
    .then((data) => localStorage.setItem("spotifyApiToken", data.access_token));
};

export const fetchArtistSearch = async (searchTerm) => {
  const artistParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("spotifyApiToken"),
    },
  };
  return fetch(
    `${API_BASE_URL}/search?q=${searchTerm}&type=artist`,
    artistParameters
  );
};
