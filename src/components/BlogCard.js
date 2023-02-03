import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

function ImageCard(props) {
  return ( 
    <Card sx={{ maxWidth: 345 }} className={props.className}>
      <CardActionArea className='h-full flex flex-col justify-between'>
        <CardMedia
          component="img"
          className='w-44 h-48'
          image={props.image}
          alt={props.imageAlt}
        />
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
  )
}

function SingleCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className={props.className}>
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
  )
}

function BlogCard (props) {
  if(props.image) {
    return <ImageCard title={props.title} image={props.image} resume={props.resume}  className={props.className}/>
  }

  return <SingleCard title={props.title} image={props.image} resume={props.resume}  className={props.className} />
}

export default BlogCard