import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Typography from '@mui/material/Typography';


function BlogSectionContact () {
  return (
    <section className="flex justify-center py-12 bg-slate-600 text-slate-200">
      <div className="container">
      <div className='flex gap-x-8 justify-center pb-6'>
        <FacebookIcon className='hover:-translate-y-1  cursor-pointer hover:text-blue-500' />
        <InstagramIcon  className='hover:-translate-y-1  cursor-pointer hover:text-pink-500'/>
        <GitHubIcon className='hover:-translate-y-1  cursor-pointer hover:text-purple-500' />
        <LinkedInIcon className='hover:-translate-y-1  cursor-pointer hover:text-blue-500' />
        <YouTubeIcon className='hover:-translate-y-1 cursor-pointer hover:text-red-500' />
        <WhatsAppIcon  className='animate-bounce text-green-400 cursor-pointer'/>
      </div>
      <div>
        <Typography sx={{ fontSize: 14 }} gutterBottom className='text-center'>
          Desenvolvido com <span className='animate-pulse'>❤️</span> por RafaelM_DEv
        </Typography>
      </div>
      </div>
    </section>
  )
}

export default BlogSectionContact