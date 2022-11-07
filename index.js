import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const tweetsData = [];
const usersData = [];

app.post("/sign-up", (req, res) => {
  const userData = {
    username: req.body.username,
    avatar: req.body.avatar,
  };

  usersData.push(userData);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweetData = {
    username: req.body.username,
    avatar: usersData.find((user) => user.username === req.body.username)
      .avatar,
    tweet: req.body.tweet,
  };

  tweetsData.push(tweetData);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  let arrayTweets = tweetsData.slice(-10);
  res.send(arrayTweets.reverse());
});

app.listen(5000, () => console.log("App running in port: 5000"));
