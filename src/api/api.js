const API_KEY = "0e4d273eeamsh2331bccfe9e0304p156991jsna8323c845df1";

export const getMatches = () => {
  const url = `https://cricket-live-score4.p.rapidapi.com/apis/series?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the current match

export const getMatchDetail = (id) => {
  const url = `https://cricket-live-score4.p.rapidapi.com/apis?series_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};