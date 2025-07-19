import { useState, useEffect } from "react";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";
import { Typography } from "@mui/material";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = { id: Date.now(), text, likes: 0 };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(tweets.map(t => t.id === id ? { ...t, likes: t.likes + 1 } : t));
  };

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2 }}>Inicio</Typography>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;