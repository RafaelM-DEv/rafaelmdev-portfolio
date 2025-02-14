import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";

function BlogSectionContact(props) {
  return (
    <section
      ref={props.toRef}
      className="flex justify-center py-12 bg-background text-slate-200"
    >
      <div className="container">
        <div className="flex gap-x-8 justify-center pb-6">
          <Link
            to={"https://www.facebook.com/Far3ll274/"}
            target="_blank"
            className={props.className}
          >
            <FacebookIcon className="hover:-translate-y-1  cursor-pointer hover:text-blue-500" />
          </Link>
          <Link
            to={"https://www.instagram.com/rafaelm_dev/"}
            target="_blank"
            className={props.className}
          >
            <InstagramIcon className="hover:-translate-y-1  cursor-pointer hover:text-pink-500" />
          </Link>
          <Link
            to={"https://github.com/RafaelM-DEv"}
            target="_blank"
            className={props.className}
          >
            <GitHubIcon className="hover:-translate-y-1  cursor-pointer hover:text-purple-500" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/dev-rafael-martins/"}
            target="_blank"
            className={props.className}
          >
            <LinkedInIcon className="hover:-translate-y-1  cursor-pointer hover:text-blue-500" />
          </Link>

          <Link
            to={"https://www.youtube.com/channel/UCIxhg-5UMVEIhLxaJOMRslA"}
            target="_blank"
            className={props.className}
          >
            <YouTubeIcon className="hover:-translate-y-1 cursor-pointer hover:text-red-500" />
          </Link>
          <Link
            to={"https://wa.me/5516992868288"}
            target="_blank"
            className={props.className}
          >
            <WhatsAppIcon className="animate-bounce text-green-400 cursor-pointer" />
          </Link>
        </div>
        <div>
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            className="text-center"
          >
            Desenvolvido com <span className="animate-pulse">❤️</span> por
            RafaelM_DEv
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSectionContact;
