import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let tweetsData = [];
let usersData = [];
let userAvatar;

app.post("/sign-up", (req, res) => {
  const userData = {
    username: req.body.username,
    avatar: req.body.avatar,
  };

  userAvatar = userData.avatar;
  usersData.push(userData);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweetData = {
    username: req.body.username,
    avatar: userAvatar,
    tweet: req.body.tweet,
  };

  tweetsData.push(tweetData);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweetsData.slice(-10));
});

app.listen(5000, () => console.log("App running in port: 5000"));
