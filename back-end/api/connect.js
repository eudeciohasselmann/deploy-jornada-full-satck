import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://eudecio:H210716h@cluster0.qjac7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
