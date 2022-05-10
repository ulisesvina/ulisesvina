const getAccessToken = async () => {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${process.env["AUTH_BASIC"]}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env["REFRESH_TOKEN"]
      })
    });
    return res.json();
  }

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};