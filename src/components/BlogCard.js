import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function ImageCard(props) {
  return (
    <Link to={`blog/${props.id}`} className="w-full">
      <Card sx={{ height: { xs: "auto", sm: 385 } }}>
        <CardActionArea className="h-full flex flex-col justify-between">
          <CardMedia
            component="img"
            className="h-48 sm:h-50 object-cover"
            image={props.image}
            alt={props.imageAlt}
          />
          <CardContent className="h-full mt-3 sm:mt-5">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="font-bold"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.resume}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

function SingleCard(props) {
  return (
    <Link to={`https://${props.link}`} target="_blank" className="w-full">
      <Card sx={{ height: { xs: "auto", sm: 110 } }}>
        <CardActionArea className="h-full">
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              variant="subtitle1"
              className="font-semibold"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.resume}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

function BlogCard(props) {
  if (props.image) {
    return <ImageCard {...props} />;
  }

  return <SingleCard {...props} />;
}

export default BlogCard;
