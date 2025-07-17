import { Card, CardContent, Typography, Button } from "@mui/material";

const Tweet = ({ tweet, onLike }) => {
  return (
    <Card sx={{ mb: 2, bgcolor: "#f7f9fc" }}>
      <CardContent>
        <Typography variant="body1">{tweet.text}</Typography>
        <Button onClick={() => onLike(tweet.id)} sx={{ mt: 1, color: "#b929ad" }}>
          ❤ {tweet.likes}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Tweet;
