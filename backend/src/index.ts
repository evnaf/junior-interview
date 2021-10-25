import express from "express";

const app = express();
const port = 3000;

const jokes = [
  {
    id: "bffb6e52-9b9a-4075-b503-7b007cefb76a",
    setup: "What did the digital clock say to the grandfather clock?",
    punchline: "Look, no hands!",
  },
  {
    id: "ac81056a-4a23-4038-a3d0-00a6cf5217f3",
    setup: "What is a pirate's favorite letter?",
    punchline: "Rrrrrrr",
  },
  {
    id: "d85fa836-621d-4762-ae3a-3a006cd68a3b",
    setup: "Don't you hate it when people answer their own questions?",
    punchline: "I do.",
  },
  {
    id: "701006e9-0b01-4177-af6c-db63ce4a79c3",
    setup: "Time flies like an arrow.",
    punchline: "Fruit flies like a banana.",
  },
  {
    id: "42a7369d-3350-4c0c-87cf-f4d638bae05b",
    setup: "I started a band called 999 Megabytes.",
    punchline: "We haven’t gotten a gig yet.",
  },
  {
    id: "b62c189e-6d25-458f-91bb-e9ba091bdf24",
    setup: "I wanna try fried beans.",
    punchline: "Maybe they taste just as good and we're wasting time.",
  },
];

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});
