

export  const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "825d8c848cmshd2628048333bbedp1c36c4jsn75f67feabd80",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '825d8c848cmshd2628048333bbedp1c36c4jsn75f67feabd80',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
