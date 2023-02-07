import BlogSkill from "./BlogSkill"

import iconNuxt from '../assets/nuxtjs.png'
import iconVue from '../assets/vuejs.png'
import iconQuasar from '../assets/quasar.png'
import iconTailwind from '../assets/tailwind.png'
import iconReact from '../assets/react.png'
import iconMUI from '../assets/MUI.png'

const skills = [
  { id: '1', title: 'VueJs', icon: iconVue, progress: 88, description: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.'},
  { id: '2', title: 'Quasar Framework', icon: iconQuasar,  progress: 78, description: 'Quasar Framework é uma estrutura baseada em Vue.js de código aberto para construir aplicativos, com uma única base de código, e implantá-lo na Web como SPA, PWA, SSR, para um aplicativo móvel, usando Cordova para iOS e Android e para um Aplicativo de desktop, usando Electron para Mac, Windows e Linux.'},
  { id: '3', title: 'Tailwind CSS', icon: iconTailwind,  progress: 87, description: 'Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.'},
  { id: '4', title: 'NuxtJs', icon: iconNuxt,  progress: 75,  description: 'Nuxt.js é um framework para aplicações web de código aberto baseado em Vue.js, Node.js, Webpack and Babel.js. O framework foi inspirado pelo Next.js que é um framework com propósito similar porém baseado em React.'},
  { id: '5', title: 'Material UI', icon: iconMUI,  progress: 30,  description: 'Material UI é uma biblioteca de componentes React de código aberto que implementa o Material Design do Google. Ele inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso na produção imediatamente.'},
  { id: '6', title: 'React', icon: iconReact,  progress: 30,  description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'}
]

const listSkills = skills.map((skill, index) =>
    <BlogSkill key={index} title={skill.title} description={skill.description} progress={skill.progress} icon={skill.icon} />
)

function BlogSectionHardSkills () {
  return (
    <section className="bg-slate-200 flex justify-center py-12">
      <div className="container text-slate-600">
          <h1 className="font-bold text-slate-600 text-4xl px-2">
              Hard Skills
          </h1>
          <div className="pt-6 flex flex-col gap-6">
            { listSkills }
          </div>
      </div>
    </section>
  )
}

export default BlogSectionHardSkills