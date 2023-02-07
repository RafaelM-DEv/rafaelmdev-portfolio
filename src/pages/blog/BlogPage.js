import * as React from 'react';
import { useParams } from 'react-router-dom';



const posts = [
  {
     id: '1',
     title: 'Como usar o Tailwind CSS?',
     resume: 'Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.',
  },
  {
    id: '2',
    title: 'Começando a usar o git e o GitHub.',
    resume: 'Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.',
  },
  {
    id: '3',
    title: 'Inserindo estilos nas páginas com o Webpack',
    resume: 'Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?',
  }
]



function BlogPage () {
  const {id} = useParams();
  const post = posts.find(post => post.id === id)

  return (
    <div>
     {post.title} {post.resume}
    </div>
  )
}

export default BlogPage