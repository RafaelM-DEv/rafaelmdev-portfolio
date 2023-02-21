import * as React from "react";

import BlogCard from "./BlogCard"
import Button from '@mui/material/Button';

import '../style/CardAnimation.css'
import '../style/shine.css'

import imageGitHub from '../assets/github_post.png'
import imageWebpack from '../assets/webpack_post.jpeg'
import imageTailwind from '../assets/tailwind_post.png'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const posts = [
  {
     id: '1',
     title: 'Como usar o Tailwind CSS?',
     resume: 'Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.',
     image: imageTailwind,
     imageAlt: 'Tailwind'
  },
  {
    id: '2',
    title: 'Começando a usar o git e o GitHub.',
    resume: 'Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.',
    image: imageGitHub,
    imageAlt: 'GitHub Logo'
  },
  {
    id: '3',
    title: 'Inserindo estilos nas páginas com o Webpack',
    resume: 'Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?',
    image: imageWebpack,
    imageAlt: 'Webpack'
  }
]

const articles = posts.map((post, index) =>
  <BlogCard key={index} id={post.id} className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 my-6 hover:shadow-xl hover:shadow-blue-400 card-blog h-96 relative' title={post.title} resume={post.resume} image={post.image} />
)

function BlogSectionBlog () {
  return (
    <section className="bg-slate-200 flex justify-center py-12">
      <div className="container text-slate-600 px-2">
          <h1 className="font-bold text-4xl animation-shine bg-slate-600">
              BLOG
          </h1>
          <div className="pt-6 text-2xl">
            Artigos em Destaques
          </div>
          <div className="pt-6 grid grid-cols-12 gap-x-3">
          { articles }
          </div>
          <div className="flex pt-6 justify-end">
            <Button variant="text" endIcon={<ArrowRightIcon color="secondary" />}>
              <div className="text-slate-600 font-semibold"> Ver Mais </div>
            </Button>
          </div>
      </div>
    </section>
  )
}

export default BlogSectionBlog