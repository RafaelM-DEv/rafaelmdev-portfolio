import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import { Parallax } from 'react-parallax';

import imageDev from '../assets/dev.png'
import BackgroundImage from '../assets/bricks.png'

function BlogSectionSoftSkills () {
  return (
    <Parallax blur={9} bgImage={BackgroundImage} bgImageAlt="brick wall" strength={400}>
      <section className="flex justify-center py-20">
        <div className="container">
            <h1 className="font-bold  text-4xl px-2 flex justify-center pb-6 text-slate-200">
                Soft Skills
            </h1>
            <div className='grid grid-cols-5 items-center'>
              <div className='col-span-2 text-end gap-14 flex flex-col font-bold text-slate-200'>
                <p>Organizado</p>
                <p className='pr-6'>Foco na solução</p>
                <p className='pr-6'>Trabalho em equipe</p>
                <p>Espirito de liderança</p>
              </div>
              <div className='col-span-1'>
                <Tippy content="Café?" placement='top' theme='light'>
                  <img src={imageDev} alt='ícone de dev' />
                </Tippy>
              </div>
              <div className='pl-2 col-span-2 gap-14 flex flex-col font-bold text-slate-200'>
                <p>Autodidata</p>
                <p className='pl-6'>Dedicado</p>
                <p className='pl-6'>Trabalho sobre pressão</p>
                <p>Comunicativo</p>
              </div>
            </div>
        </div>
      </section>
    </Parallax>
  )
}

export default BlogSectionSoftSkills