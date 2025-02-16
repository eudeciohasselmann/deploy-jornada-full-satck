import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URL = "https://deploy-jornada-full-satck.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);

const responseSongs = await axios.get(`${URL}/songs`);

console.log(responseArtists.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
