import BlogCard from "./BlogCard";

function BlogSectionProjects(props) {
  return (
    <section
      ref={props.toRef}
      id="project"
      className="flex justify-center py-8 md:py-16 bg-background"
    >
      <div className="container px-4 md:px-0">
        <h1 className="font-bold text-3xl md:text-4xl pb-8 md:pb-12 text-white">
          Principais Projetos
        </h1>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <BlogCard
            title="Space Cliker"
            resume="Quasar Framework + vue 2"
            link="/spaceclicker.com.br/space"
          />
          <BlogCard title="HitMidias OS " resume="Quasar Framework + vue 3" />
          <BlogCard
            title="Gabarito Enem"
            resume="Nuxt 2"
            link="gabarito.plataformaaz.com.br/"
          />
          <BlogCard title="Weclix" resume="Nuxt 2" link="www.weclix.com.br" />
          <BlogCard title="Nave.Bild" resume="Nuxt 3" link="nave.app.br" />
          <BlogCard title="Blog Pessoal" resume="React" />
          <BlogCard
            title="Bolso-Virtual APP"
            resume="Quasar Framework + vue 2"
            link="bolsovirtual.com.br/"
          />
          <BlogCard title="MORECO" resume="Adonisjs + javascript + wix" />
          <BlogCard
            title="Muru Pimentas"
            resume="Adonisjs + Kangu + Api Pagar.me"
            link="murupimentas.com.br"
          />
          <BlogCard
            title="4#all"
            resume="Adonisjs + Wix + API SIBS"
            link="grupo4all.com"
          />
          <BlogCard
            title="Nossa casa Caraíva"
            resume="SEO Avançado"
            link="nossacasacaraiva.com.br"
          />
          <BlogCard
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
