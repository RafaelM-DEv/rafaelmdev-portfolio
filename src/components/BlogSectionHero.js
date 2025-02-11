import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Parallax } from "react-parallax";

import imagePerfil from "../assets/perfil.png";
import BackgroundImage from "../assets/bricks.png";
import iconNuxt from "../assets/nuxtjs.png";
import iconVue from "../assets/vuejs.png";
import iconQuasar from "../assets/quasar.png";
import iconTailwind from "../assets/tailwind.png";
import iconReact from "../assets/react.png";
import iconMUI from "../assets/MUI.png";

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

function BlogSectionHero() {
  return (
    <Parallax
      blur={2}
      bgImage={BackgroundImage}
      bgImageAlt="bricks wall"
      strength={400}
    >
      <div className="w-screen flex h-[500px] justify-center section px-2 pt-10">
        <div className=" pt-12 flex items-center justify-center md:justify-between px-10">
          <div className="text-slate-200 font-bold text-4xl">
            RafaelM-DEv
            <p className="text-xl font-normal w-96 my-6">
              Olá, me chamo Rafael Martins e sou desenvolvedor{" "}
              <strong className="bg-blue-600 px-1">front-end</strong> há 5 anos
              formado em Análise e desenvolvimento de sistemas!
            </p>
            <div className="grid grid-cols-12 px-6">{stackList}</div>
          </div>
          <div className="justify-end hidden md:flex">
            <Tippy content="Hello World!" placement="top" theme="light">
              <img
                src={imagePerfil}
                alt="imagem de perfil"
                className="w-[400px]"
              />
            </Tippy>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default BlogSectionHero;
