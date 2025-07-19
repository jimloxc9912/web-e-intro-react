import { Card, CardContent, Typography, Button } from "@mui/material";

export const Tweet = ({ tweet, onLike }) => (
  <Card sx={{ mb: 2, bgcolor: "#fff", border: "1px solid #e1e8ed", borderRadius: 2 }}>
  <CardContent>
    <Typography variant="body1" sx={{ color: "#14171a" }}>
      {tweet.text}
    </Typography>
    <Button
      onClick={() => onLike(tweet.id)}
      sx={{ mt: 1, color: "#e0245e", textTransform: "none" }}
    >
      ❤️ {tweet.likes}
    </Button>
  </CardContent>
</Card>

);