import BlogCard from "./BlogCard"

function BlogSectionProjects () {
  // TODO revisar layout dos cards e add uma descrição / resumo sobre o projeto, usar tbm as tecnologias usadas em badges (chips) no final do card
  return (
    <section id="project" className="flex justify-center py-16 bg-slate-200">
      <div className="container">
        <h1 className="font-bold  text-4xl px-2 pb-12 text-slate-600">
            Projetos
        </h1>
        <div className="gap-2 grid grid-cols-12">
          <BlogCard className='col-span-3' title='Space-Cliker' resume='Jogo feito com Quasar Framework' />
          <BlogCard className='col-span-3' title='HitMidias OS ' resume='Feito com  Quasar Framework' />
          <BlogCard className='col-span-3' title='Gabarito Enem' resume='Feito com Nuxt 2' />
          <BlogCard className='col-span-3' title='Weclix' resume=' Feito com Nuxt 2' />
          <BlogCard className='col-span-3' title='A Nave' resume=' Feito com Nuxt 2' />
          <BlogCard className='col-span-3' title='Nave.Bild' resume='Feito com Nuxt 3' />
          <BlogCard className='col-span-3' title='Blog Pessoal' resume='Feito com React' />
          <BlogCard className='col-span-3' title='Hub-solutions' resume='Feito com Nuxt 2' />
        </div>
      </div>
    </section>
  )
}

export default BlogSectionProjects