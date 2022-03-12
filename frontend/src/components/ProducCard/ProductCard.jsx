import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard({ props }) {
  const { name, description, image, price } = props;
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`${name}-image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="black">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
