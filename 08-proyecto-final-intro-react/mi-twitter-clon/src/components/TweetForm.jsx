import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="¿Qué estás pensando?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" sx={{ bgcolor: "#322e69" }}>
        Tweet
      </Button>
    </Box>
  );
};

export default TweetForm;