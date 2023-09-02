const GOOGLE_API_KEY = "AIzaSyCZ_1MstaZbe8NFhIWAl3hzU2XknmBAIxQ";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API_BY_INPUT = `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&q=india&key=AIzaSyCZ_1MstaZbe8NFhIWAl3hzU2XknmBAIxQ`;
