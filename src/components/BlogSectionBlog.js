import BlogCard from "./BlogCard";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "../style/CardAnimation.css";
import "../style/shine.css";

import imageGitHub from "../assets/github_post.png";
import imageWebpack from "../assets/webpack_post.jpeg";
import imageTailwind from "../assets/tailwind_post.png";

const posts = [
  {
    id: "1",
    title: "Como usar o Tailwind CSS?",
    resume:
      "Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.",
    image: imageTailwind,
    imageAlt: "Tailwind",
  },
  {
    id: "2",
    title: "Começando a usar o git e o GitHub.",
    resume:
      "Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.",
    image: imageGitHub,
    imageAlt: "GitHub Logo",
  },
  {
    id: "3",
    title: "Inserindo estilos nas páginas com o Webpack",
    resume:
      "Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?",
    image: imageWebpack,
    imageAlt: "Webpack",
  },
];

function BlogSectionBlog(props) {
  return (
    <section
      ref={props.toRef}
      className="bg-background flex justify-center py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container text-slate-600 px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-4xl sm:text-4xl text-white">BLOG</h1>
        <div className="pt-4 sm:pt-6 text-xl sm:text-2xl text-white">
          Artigos em Destaques
        </div>
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              id={post.id}
              className="hover:shadow-xl hover:shadow-blue-400 card-blog relative"
              title={post.title}
              resume={post.resume}
              image={post.image}
            />
          ))}
        </div>
        <div className="hidden pt-6 justify-end">
          <Button variant="text" endIcon={<ArrowRightIcon color="secondary" />}>
            <div className="text-slate-600 font-semibold"> Ver Mais </div>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogSectionBlog;
