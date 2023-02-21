import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from "react-router-dom";

function ImageCard(props) {
  return ( 
    <Link to={`blog/${props.id}`} className={props.className}>
      <Card sx={{ height: 385 }}>
        <CardActionArea className='h-full flex flex-col justify-between'>
          <CardMedia component="img" className='h-40' image={props.image} alt={props.imageAlt} />
          <CardContent className='h-full'>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.resume}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

function SingleCard(props) {
  return (
    <Link to={'#'} className={props.className}>
      <Card sx={{ height: 110 }} >
        <CardActionArea className='h-full'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.resume}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

function BlogCard (props) {
  if(props.image) {
    return <ImageCard title={props.title} image={props.image} resume={props.resume}  className={props.className} id={props.id}/>
  }

  return <SingleCard title={props.title} image={props.image} resume={props.resume}  className={props.className} id={props.id} />
}

export default BlogCard