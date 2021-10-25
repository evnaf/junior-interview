import express from "express";

const app = express();
const port = 3000;

const jokes = [
  {
    id: "1",
    punchline: "Look, no hands!",
    setup: "What did the digital clock say to the grandfather clock?",
  },
  {
    id: "2",
    punchline: "Rrrrrrr",
    setup: "What is a pirate's favorite letter?",
  },
];

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});
