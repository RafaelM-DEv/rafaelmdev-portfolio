import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Parallax } from "react-parallax";

import imagePerfil from "../assets/perfil.png";
import BackgroundImage from "../assets/bricks.jpg";
import iconNuxt from "../assets/nuxtjs.png";
import iconVue from "../assets/vuejs.png";
import iconQuasar from "../assets/quasar.png";
import iconTailwind from "../assets/tailwind.png";
import iconReact from "../assets/react.png";
import iconMUI from "../assets/MUI.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";

const stack = [
  { id: "1", icon: iconVue, alt: "VueJs icon", tippyContent: "VueJs" },
  {
    id: "2",
    icon: iconQuasar,
    alt: "Quasar Framework icon",
    tippyContent: "Quasar Framework",
  },
  {
    id: "3",
    icon: iconTailwind,
    alt: "TailwindCss icon",
    tippyContent: "TailwindCss",
  },
  { id: "4", icon: iconNuxt, alt: "Nuxt icon", tippyContent: "Nuxt" },
  { id: "5", icon: iconReact, alt: "React icon", tippyContent: "React" },
  {
    id: "6",
    icon: iconMUI,
    alt: "Material UI icon",
    tippyContent: "Material UI",
  },
];

const stackList = stack.map((item, index) => (
  <Tippy
    content={item.tippyContent}
    placement="bottom"
    theme="light"
    key={index}
  >
    <img
      src={item.icon}
      alt={item.alt}
      className="w-20 col-span-4 md:col-span-2"
    />
  </Tippy>
));

function BlogSectionHero(props) {
  return (
    <Parallax
      blur={2}
      bgImage={BackgroundImage}
      bgImageAlt="bricks wall"
      strength={400}
    >
      <div className="w-screen flex h-[500px] justify-center section px-2 pt-10">
        <div className=" pt-12 flex items-center justify-center md:justify-between px-10 w-2/3">
          <div className="text-gray-500 font-bold text-4xl">
            RafaelM-DEv
            <p className="text-xl font-normal w-96 my-6">
              Olá, me chamo Rafael Martins e sou desenvolvedor{" "}
              <strong className="bg-blue-600 px-1 text-white animation-shine">
                Full-Stack
              </strong>{" "}
              há 5 anos formado em Análise e desenvolvimento de sistemas!
            </p>
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
          </div>
          <div className="justify-end hidden md:flex">
            <Tippy content="Hello World!" placement="top" theme="light">
              <img
                src={imagePerfil}
                alt="imagem de perfil"
                className="w-[300px] rounded-full"
              />
            </Tippy>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default BlogSectionHero;
