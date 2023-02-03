
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function BlogSkill (props) {
  return (
    <div className="grid grid-cols-12 text-slate-200 px-2 items-center">
      <div className='col-span-1'>
         <img src={props.icon} alt="VueJs icon" className='w-28' />
      </div>
      <div className='col-span-10'>
        <div className="font-bold text-purple-400 text-lg">
          {props.title}
        </div>
        <div className='text-justify mr-14'>
          {props.description}
        </div>
        <div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <Paper elevation={1} >
                <LinearProgress variant="determinate" value={props.progress} color='secondary' />
              </Paper>
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="white">{props.progress}%</Typography>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default BlogSkill