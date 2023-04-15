import * as React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography'

import imageTailwind from '../../assets/tailwind_single_page.jpg'
import imageGitHub from '../../assets/github_post.png'

import '../../style/blogContent.css'

const posts = [
  {
     id: '1',
     title: 'Como usar o Tailwind CSS?',
     resume: 'Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.',
     image: imageTailwind,
     alt: 'Tailwind post',
     content: `<p>Para come&ccedil;ar gostaria de falar um pouco sobre o que &eacute; <strong><a href="https://tailwindcss.com">Tailwind CSS</a></strong>.</p><p>Tailwind CSS &eacute; um Framework CSS que se baseia em classes de utilit&aacute;rios que &eacute; basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.</p><p>O que vamos ver nesse Artigo</p><ul><li>Criar um Projeto Vue3 (vite)</li><li>Instalar o Tailwind CSS</li><li>Incluir o Tailwind no seu projeto</li><li>Criar um componente Card simples</li></ul><p>Ao come&ccedil;ar a usar o Tailwind CSS &eacute; nos apresentado uma lista de Frameworks onde para cada um deles &eacute; um jeito de instalar diferente.</p><p>Como previsto vamos usar o Vue3 (vite)</p> <h3>Criando projeto Vue3 (vite)</h3><p>Voc&ecirc; pode ver a documenta&ccedil;&atilde;o dessas tecnologias aqui <a href="https://v3.vuejs.org">Vue3</a> / <a href="https://vitejs.dev">Vite</a> .</p><p>Para come&ccedil;ar crie uma pasta onde ficar&aacute; seu projeto e abra o terminal no mesmo endere&ccedil;o.</p><p>Em seguida usamos o comando abaixo para iniciar um novo projeto <strong>Vite</strong></p><pre><code>$ npm init @vitejs/app my-project$ cd my-project</code></pre><p>O <strong>Vite</strong> pode pedir algumas informa&ccedil;&otilde;es a mais para o projeto por&eacute;m s&atilde;o coisas simples &eacute; s&oacute; ir respondendo.</p><p>Na Pasta do projeto vamos instalar as depend&ecirc;ncias usando o comando</p><pre><code>$ npm install</code></pre><p>Depois de instalado pode iniciar com o comando</p><pre><code>$ npm run dev</code></pre><h3>Instalando o Tailwind CSS</h3><p>No Terminal com o endere&ccedil;o do projeto selecionado vamos instalar o Tailwind CSS atrav&eacute;s do <strong>npm</strong> usando esse comando</p><pre><code>$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest</code></pre><p>Ap&oacute;s a instala&ccedil;&atilde;o devemos criar os arquivos de configura&ccedil;&atilde;o usando o comando</p><pre><code>$ npx tailwindcss init -p</code></pre><p>O Tailwind CSS ir&aacute; criar dois arquivos de configura&ccedil;&atilde;o, o <strong>tailwind.config.js</strong> e o <strong>postcss.config.js</strong> ambos ****servem para personalizar o uso do Tailwind em seu projeto, o <strong>postcss</strong> &eacute; usado para caso queira usar o Tailwind com algum pr&eacute;-processador de <strong>css</strong> como <strong>Sass</strong>, <strong>Less</strong>, <strong>Stylus</strong> e outros.</p><pre><code>tailwind.config.jsmodule.exports = { <br> purge: [], <br> darkMode: false, // or 'media' or 'class' <br> theme: { <br>   extend: {}, <br> }, <br> variants: { <br>   extend: {}, <br> }, <br> plugins: [] <br>}</code></pre><pre><code>postcss.config.jsmodule.exports = { <br> plugins: { <br>   tailwindcss: {}, <br>   autoprefixer: {}, <br> }<br>}</code></pre><h3>Incluindo o Tailwind CSS no seu projeto</h3><p>Somente a instala&ccedil;&atilde;o n&atilde;o avisa nosso projeto que vamos usar as classes do Tailwind, precisamos importa-lo.</p><p>Para isso eu encontrei duas formas, a primeira depende se seu projeto usar&aacute; arquivos de estilo <strong>css</strong> fora das p&aacute;ginas, como &eacute; um projeto <strong>Vue</strong> usa-se o estilo no mesmo aquivo, &eacute; usado externo apenas para algumas configura&ccedil;&otilde;es globais.</p><p>Vamos abrir o projeto com seu editor favorito, no meu caso o VSCode e vamos na estrutura criada pelo Vite<br></p><p> Veja que como primeira opção eu criei uma diretório css para configurações globais com um arquivo chamado main.css com o conteúdo de importação do Tailwind CSS dessa forma</p><pre><code>/* ./src/css/main.css */<br>@tailwind base;<br>@tailwind components;<br>@tailwind utilities;</code></pre><p>Agora basta ir no arquivo main.js e importar nosso arquivo main.css</p><pre><code> /* ./src/main.js */ <br>import { createApp } from 'vue'<br>import App from './App.vue'<br>import '../src/css/main.css'<br>createApp(App).mount('#app')<br></code></pre><p>e pronto agora é só usar as classes do TailWind em nossas páginas.</p>`
  },
  {
    id: '2',
    title: 'Começando a usar o git e o GitHub.',
    resume: 'Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.',
    image: imageGitHub,
    alt: 'Github post',
    content: ''
  },
  {
    id: '3',
    title: 'Inserindo estilos nas páginas com o Webpack',
    resume: 'Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?',
    image: imageTailwind,
    alt: 'webpack post'
  }
]

function BlogPage () {
  const {id} = useParams();
  const post = posts.find(post => post.id === id)

  return (
    <section className="flex justify-center py-12">
      <div className="container text-slate-600 px-2">
        <div className='mb-6'>
        Por: <span className='text-purple-400'>Rafael Martins</span>
        </div>
        <div className='flex justify-center mb-6'>
          <img src={post.image} alt={post.alt}/>
        </div>
        <Typography gutterBottom variant="h5" component="h1">
           {post.title}
        </Typography>
        <section>
          <div dangerouslySetInnerHTML={{__html:  post.content}} className='content-html'></div>
        </section>
      </div>
    </section>
  )
}

export default BlogPage