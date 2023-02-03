// Modules
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import { Parallax } from 'react-parallax';


// Images
import imagePerfil from '../assets/perfil.png'
import BackgroundImage from '../assets/bricks.png'

import iconNuxt from '../assets/nuxtjs.png'
import iconVue from '../assets/vuejs.png'
import iconQuasar from '../assets/quasar.png'
import iconTailwind from '../assets/tailwind.png'
import iconReact from '../assets/react.png'
import iconMUI from '../assets/MUI.png'

const stack = [
  { icon: iconVue, alt: 'VueJs icon',  tippyContent: 'VueJs'},
  { icon: iconQuasar, alt: 'Quasar Framework icon',  tippyContent: 'Quasar Framework'},
  { icon: iconTailwind, alt: 'TailwindCss icon',  tippyContent: 'TailwindCss'},
  { icon: iconNuxt, alt: 'Nuxt icon',  tippyContent: 'Nuxt'},
  { icon: iconReact, alt: 'React icon',  tippyContent: 'React'},
  { icon: iconMUI, alt: 'Material UI icon',  tippyContent: 'Material UI'}
]

const stackList = stack.map((item) => 
<Tippy content={item.tippyContent} placement='bottom' theme='light'>
    <img src={item.icon} alt={item.alt} className='w-20'/>
</Tippy>
)

function BlogSectionHero () {
  return (
    <Parallax blur={5} bgImage={BackgroundImage} bgImageAlt="bricks wall" strength={500}>
      <div className='w-screen flex justify-center section h-[520px] px-2 pt-10'>
        <div className="container pt-12 flex items-center justify-between">
          <div className="text-slate-200 font-bold text-4xl">
            RafaelM-DEv
            <p className="text-xl font-normal w-96 my-6">
                Olá, me chamo Rafael Martins e sou desenvolvedor front-end  há 3 anos e formado em Analise e desenvolvimento de sistemas!
            </p>
            <div className='flex justify-center px-6'>
                { stackList }
            </div>
          </div>
          <div className='flex justify-end'>
          <Tippy content="Hello World!" placement='top' theme='light'>
              <img src={imagePerfil} alt="imagem de perfil" className='w-[75%]'/>
          </Tippy>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default BlogSectionHero