import BlogCard from "./BlogCard";

function BlogSectionProjects(props) {
  // [] revisar layout dos cards e add uma descrição / resumo sobre o projeto, usar tbm as tecnologias usadas em badges (chips) no final do card
  return (
    <section
      ref={props.toRef}
      id="project"
      className="flex justify-center py-16 bg-slate-200"
    >
      <div className="container">
        <h1 className="font-bold text-4xl px-2 pb-12 text-slate-600">
          Principais Projetos
        </h1>
        <div className="gap-2 grid grid-cols-12">
          <BlogCard
            className="col-span-3"
            title="Space Cliker"
            resume="Quasar Framework + vue 2"
            link="/spaceclicker.com.br/space"
          />
          <BlogCard
            className="col-span-3"
            title="HitMidias OS "
            resume="Quasar Framework + vue 3"
          />
          <BlogCard
            className="col-span-3"
            title="Gabarito Enem"
            resume="Nuxt 2"
            link="gabarito.plataformaaz.com.br/"
          />
          <BlogCard
            className="col-span-3"
            title="Weclix"
            resume="Nuxt 2"
            link="www.weclix.com.br"
          />
          <BlogCard
            className="col-span-3"
            title="Nave.Bild"
            resume="Nuxt 3"
            link="nave.app.br"
          />
          <BlogCard
            className="col-span-3"
            title="Blog Pessoal"
            resume="React"
          />
          <BlogCard
            className="col-span-3"
            title="Bolso-Virtual APP"
            resume="Quasar Framework + vue 2"
            link="bolsovirtual.com.br/"
          />
          <BlogCard
            className="col-span-3"
            title="MORECO"
            resume="Adonisjs + javascript + wix"
          />
          <BlogCard
            className="col-span-3"
            title="Muru Pimentas"
            resume="Adonisjs + Kangu + Api Pagar.me"
            link="murupimentas.com.br"
          />
          <BlogCard
            className="col-span-3"
            title="4#all"
            resume="Adonisjs + Wix + API SIBS"
            link="grupo4all.com"
          />
          <BlogCard
            className="col-span-3"
            title="Nossa casa Caraíva"
            resume="SEO Avançado"
            link="nossacasacaraiva.com.br"
          />
          <BlogCard
            className="col-span-3"
            title="Light for the People"
            resume="Páginas Dinâmicas"
            link="//www.lightforthepeople.org/"
          />
        </div>
      </div>
    </section>
  );
}

export default BlogSectionProjects;
