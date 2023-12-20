const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
let arr = [
  {
    id: 1,
    fullName: "Alice Harmony",
    age: 28,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 2,
    fullName: "Ethan Melody",
    age: 34,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 3,
    fullName: "Olivia Rhythm",
    age: 25,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 4,
    fullName: "Liam Cadence",
    age: 31,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 5,
    fullName: "Ava Sonata",
    age: 27,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 6,
    fullName: "Noah Beatbox",
    age: 29,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 7,
    fullName: "Sophia Crescendo",
    age: 32,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 8,
    fullName: "Jackson Harmony",
    age: 26,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 9,
    fullName: "Emma Melisma",
    age: 30,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
  {
    id: 10,
    fullName: "Aiden Lyric",
    age: 33,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UY1200_CR45,0,630,1200_AL_.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Artists");
});
app.get("/artists", (req, res) => {
  if (req.query.name) {
    arr = arr.filter((item) => item.fullName.includes(req.query.name));
  }

  res.send(arr);
});
app.get("/artists/:id", (req, res) => {
  let found = arr.find((item) => item.id == req.params.id);
  res.send(found);
});
app.post("/artists", (req, res) => {
  let length = arr.length + 1;
  arr.push({ ...req.body, id: length });

  res.send(arr);
});
app.delete("/artists/:id", (req, res) => {
  arr = arr.filter((item) => item.id != req.params.id);
  res.send(arr);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
