const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCatData = async (url) => {
  return await fetch(`https://api.thecatapi.com/v1${url}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'CORS': 'Access-Control-Allow-Origin',
      "x-api-key": API_KEY,
    }
  });
}