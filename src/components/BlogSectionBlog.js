import BlogCard from "./BlogCard"
import imageGitHub from '../assets/github_post.png'
import imageWebpack from '../assets/webpack_post.jpeg'
import imageTailwind from '../assets/tailwind_post.png'

function BlogSectionBlog () {
  return (
    <section className="bg-slate-600 flex justify-center py-6">
    <div className="container text-white px-2">
        <h1 className="font-bold text-4xl">
            BLOG
        </h1>
        <div className="pt-6">
           Artigos em Destaques
        </div>
        <div className="pt-6 grid grid-cols-12 gap-x-3">
          <BlogCard 
              className='col-span-4' 
              title='Como usar o Tailwind CSS?' 
              resume='Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.'
              image={imageTailwind} 
          />
          <BlogCard
              className='col-span-4'
              title='Começando a usar o git e o GitHub.' 
              resume='Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.'
              image={imageGitHub}
             />
          <BlogCard 
              className='col-span-4'
              title='Inserindo estilos nas páginas com o Webpack'
              resume='Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?' 
              image={imageWebpack}
           />
        </div>
        <div className="flex pt-6 justify-end">
        Ver mais >
        </div>
    </div>
  </section>
  )
}

export default BlogSectionBlog