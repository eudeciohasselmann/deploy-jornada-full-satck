import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currArtistObj) => {
  const newArtisObj = { ...currArtistObj };
  delete newArtisObj.id;
  return newArtisObj;
});

const newSongsArray = songsArray.map((currSongtObj) => {
  const newSongObj = { ...currSongtObj };
  delete newSongObj.id;
  return newSongObj;
});

const responseInsertArtist = await db
  .collection("artists")
  .insertMany(newArtistsArray);

const responseInsertSong = await db
  .collection("songs")
  .insertMany(newSongsArray);

console.log(responseInsertArtist);
console.log(responseInsertSong);
