import * as React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

import imageTailwind from "../../assets/tailwind_single_page.jpg";
import imageGitHub from "../../assets/github_post.png";
import imageWebpak from "../../assets/webpack_post.jpeg";

import "../../style/blogContent.css";

const posts = [
  {
    id: "1",
    title: "Como usar o Tailwind CSS?",
    resume:
      "Tailwind CSS é um Framework CSS que se baseia em classes de utilitários que é basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.",
    image: imageTailwind,
    alt: "Tailwind post",
    content: `<p>Para come&ccedil;ar gostaria de falar um pouco sobre o que &eacute; <strong><a href="https://tailwindcss.com">Tailwind CSS</a></strong>.</p><p>Tailwind CSS &eacute; um Framework CSS que se baseia em classes de utilit&aacute;rios que &eacute; basicamente uma biblioteca de classes que podem ser usadas diretamente na sua propriedade class.</p><p>O que vamos ver nesse Artigo</p><ul><li>Criar um Projeto Vue3 (vite)</li><li>Instalar o Tailwind CSS</li><li>Incluir o Tailwind no seu projeto</li><li>Criar um componente Card simples</li></ul><p>Ao come&ccedil;ar a usar o Tailwind CSS &eacute; nos apresentado uma lista de Frameworks onde para cada um deles &eacute; um jeito de instalar diferente.</p><p>Como previsto vamos usar o Vue3 (vite)</p> <h3>Criando projeto Vue3 (vite)</h3><p>Voc&ecirc; pode ver a documenta&ccedil;&atilde;o dessas tecnologias aqui <a href="https://v3.vuejs.org">Vue3</a> / <a href="https://vitejs.dev">Vite</a> .</p><p>Para come&ccedil;ar crie uma pasta onde ficar&aacute; seu projeto e abra o terminal no mesmo endere&ccedil;o.</p><p>Em seguida usamos o comando abaixo para iniciar um novo projeto <strong>Vite</strong></p><pre><code>$ npm init @vitejs/app my-project$ cd my-project</code></pre><p>O <strong>Vite</strong> pode pedir algumas informa&ccedil;&otilde;es a mais para o projeto por&eacute;m s&atilde;o coisas simples &eacute; s&oacute; ir respondendo.</p><p>Na Pasta do projeto vamos instalar as depend&ecirc;ncias usando o comando</p><pre><code>$ npm install</code></pre><p>Depois de instalado pode iniciar com o comando</p><pre><code>$ npm run dev</code></pre><h3>Instalando o Tailwind CSS</h3><p>No Terminal com o endere&ccedil;o do projeto selecionado vamos instalar o Tailwind CSS atrav&eacute;s do <strong>npm</strong> usando esse comando</p><pre><code>$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest</code></pre><p>Ap&oacute;s a instala&ccedil;&atilde;o devemos criar os arquivos de configura&ccedil;&atilde;o usando o comando</p><pre><code>$ npx tailwindcss init -p</code></pre><p>O Tailwind CSS ir&aacute; criar dois arquivos de configura&ccedil;&atilde;o, o <strong>tailwind.config.js</strong> e o <strong>postcss.config.js</strong> ambos ****servem para personalizar o uso do Tailwind em seu projeto, o <strong>postcss</strong> &eacute; usado para caso queira usar o Tailwind com algum pr&eacute;-processador de <strong>css</strong> como <strong>Sass</strong>, <strong>Less</strong>, <strong>Stylus</strong> e outros.</p><pre><code>tailwind.config.jsmodule.exports = { <br> purge: [], <br> darkMode: false, // or 'media' or 'class' <br> theme: { <br>   extend: {}, <br> }, <br> variants: { <br>   extend: {}, <br> }, <br> plugins: [] <br>}</code></pre><pre><code>postcss.config.jsmodule.exports = { <br> plugins: { <br>   tailwindcss: {}, <br>   autoprefixer: {}, <br> }<br>}</code></pre><h3>Incluindo o Tailwind CSS no seu projeto</h3><p>Somente a instala&ccedil;&atilde;o n&atilde;o avisa nosso projeto que vamos usar as classes do Tailwind, precisamos importa-lo.</p><p>Para isso eu encontrei duas formas, a primeira depende se seu projeto usar&aacute; arquivos de estilo <strong>css</strong> fora das p&aacute;ginas, como &eacute; um projeto <strong>Vue</strong> usa-se o estilo no mesmo aquivo, &eacute; usado externo apenas para algumas configura&ccedil;&otilde;es globais.</p><p>Vamos abrir o projeto com seu editor favorito, no meu caso o VSCode e vamos na estrutura criada pelo Vite<br></p><p> Veja que como primeira opção eu criei uma diretório css para configurações globais com um arquivo chamado main.css com o conteúdo de importação do Tailwind CSS dessa forma</p><pre><code>/* ./src/css/main.css */<br>@tailwind base;<br>@tailwind components;<br>@tailwind utilities;</code></pre><p>Agora basta ir no arquivo main.js e importar nosso arquivo main.css</p><pre><code> /* ./src/main.js */ <br>import { createApp } from 'vue'<br>import App from './App.vue'<br>import '../src/css/main.css'<br>createApp(App).mount('#app')<br></code></pre><p>e pronto agora é só usar as classes do TailWind em nossas páginas.</p>`,
  },
  {
    id: "2",
    title: "Começando a usar o git e o GitHub.",
    resume:
      "Esse é um artigo passo-a-passo de como iniciar seus projetos usando o git  e o github.",
    image: imageGitHub,
    alt: "Github post",
    content: `<html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Configurando Ambiente com Docker (AdonisJS)</title></head><body><h1>Configurando Ambiente com Docker (AdonisJS)</h1><p>Olá Dev’s, se você é iniciante e deparou com algum trabalho em que precisa configurar o Docker ou está querendo criar um projeto novo pra aprender como tudo funciona, você está no artigo certo.</p><p>Vou tentar explicar da forma mais simples e objetiva, vou usar o AdonisJS como exemplo, mais serve para qualquer framework / banco de dados, basta configurar de acordo com o banco que vai usar.</p><h2>O que é o Docker afinal?</h2><p>O Docker é uma ferramenta que nos ajuda a criar, implantar e executar aplicações baseado em containers, isso facilita a execução do projeto independente do ambiente que está sendo executado.</p><p>No nosso caso vamos criar um ambiente back-end com AdonisJS e faze-lo conectar ao banco de dados sem precisar de instalar um banco de dados na nossa máquina, ficará tudo armazenado dentro do container e ele irá cuidar de tudo.</p><h2>Instalando o AdonisJs</h2><p>Pra começarmos vamos precisar do node.js instalado na nossa maquina, pra conferir se está tudo instalado basta digitar os seguintes comandos:</p><pre><code>node -v\nnpm -v</code></pre><p>Se aparecer a versão instalada está tudo certo, podemos prosseguir para a instalação do AdonisJs com o seguinte comando:</p><pre><code>npm i -g @adonisjs/cli</code></pre><p><em>o -g é para instalar de forma global, podendo ser executado em qualquer lugar.</em></p><p>Após a instalação vamos iniciar um projeto API Rest simples, escolha um local para criar o projeto e execute o comando:</p><pre><code>adonis new new-project --api-only</code></pre><p><img src='https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aac0b548-b240-4062-9c3e-edf1da129838/Untitled.png' alt='Untitled'></p><p>Espere ele executar e então entre na pasta do projeto usando o comando</p><pre><code>$ cd new-project</code></pre><p>Não vou entrar em muitos detalhes sobre o AdonisJs pois o foco é configurar o Docker, que é o que vamos fazer a partir daqui! Então bora!</p><p>Para poder continuar vai precisar instalar o Docker primeiro, vou deixar dois links, um para Windows 10 e o outro para Linux</p><p>Windows</p><p><a href='https://runnable.com/docker/install-docker-on-windows-10'>https://runnable.com/docker/install-docker-on-windows-10</a></p><p>Ubuntu</p><p><a href='https://docs.docker.com/engine/install/ubuntu/'>https://docs.docker.com/engine/install/ubuntu/</a></p><aside>💡 <strong>OBS:</strong> Vou considerar daqui pra frente que já possui o Docker instalado, OK!?</aside><p>Para configurar o Docker precisamos de um arquivo chamado <strong>Dockerfile</strong> no diretório raiz do projeto, esse arquivo irá conter instruções para que o Docker construa uma imagem para nosso aplicativo AdonisJS.</p><p>Podemos fazer da seguinte forma, primeiro crie o arquivo chamado <strong>Dockerfile</strong> e depois abra-o e vamos inserir as instruções</p><pre><code># Vamos usar uma imagem mais atualizada do node pasando a versão lts\nFROM node:lts-alpine\n\n# Aqui nos vamos criar e definir um local de trabalho para o Docker\nRUN mkdir -p /home/node/app\n\nWORKDIR /home/node/app\n\n# Vamos copiar o package.json para dentro do local de trabalho do Docker\nCOPY package.json .\n\n# Aqui vamos instalar o adonis no local de trabalho do Docker\nRUN npm i -g @adonisjs/cli --legacy-peer-deps\n\n# Aqui vou instalar o banco de dados que vai ser usado pelo AdonisJS\n# dentro do local de trabalho do Docker\nRUN npm install mysql --save\n\n# Vamos Instalar todas as Depedencias do projeto\nRUN npm install\n\n# Depois vamos copiar o restante do projeto para dentro do local de trabalho\nCOPY . .\n\n# Aqui vamos expor a porta que vamos usar para comunicar com os serviços do Docker\nEXPOSE 8080\n\n# Por fim vamos executar nossa aplicação\nCMD ["npm", "run", "start"]\n</code></pre><p>Agora precisamos de um <strong>docker-compose.yml</strong> que vai ser responsável por configurar os serviços de nossa aplicação, que são eles o servidor e o acesso ao banco de dados.</p><p>Basta criar um novo arquivo com o nome <strong>docker-compose.yml</strong> depois vamos inserir a seguinte configuração:</p><pre><code>version: "3"\n\nservices:\n# app vai ser o nome da nossa aplicação \n  app:\n\t\t# aqui ele vai pegar todo conteúdo do local de trabalho definino no Docker e montar\n\t\t# os volumes\n    build:\n      context: .\n      dockerfile: dockerfile\n    volumes:\n    - .:/home/node/app\n    - /home/node/app/node_modules\n    ports:\n    - 8080:8080\n    depends_on:\n      - db\n    networks:\n      - app-network\n\t\n\t# aqui vamos configurar nosso banco de dados e as variáveis de ambiente\n  db:\n    image: mariadb\n    command: --default-authentication-plugin=mysql_native_password\n    container_name: new_project\n    restart: always\n    ports:\n      - 3306:3306\n    expose:\n      - '3306'\n    networks:\n      - app-network\n    environment:\n      MYSQL_ROOT_PASSWORD: secret\n      MYSQL_USER: mariadb\n      MYSQL_PASSWORD: mariadb\n      MYSQL_DATABASE: mariadb_my_aplication\n    \n\n# Aqui vamos isolar a conexção do doker do nosso host para que use somente a porta que\n# foi exposta, o driver de ponte cria uma rede privada interna ao host</code></pre></body></html>`,
  },
  {
    id: "3",
    title: "Inserindo estilos nas páginas com o Webpack",
    resume:
      "Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?",
    image: imageWebpak,
    alt: "webpack post",
    content: `<h1>Compilando SASS e inserindo nossos estilos nas páginas com o Webpack</h1><p>Como inserir todo nosso código css em nossas páginas na hora de construir uma aplicação para produção? E como compilar todo código sass para css?</p><p>Bom isso parece ser um pouco complicado, porém temos recursos (loaders) do webpack para fazer isso sem muita complicações, o que precisamos é entender o que cada um deles faz e o que é possível com eles juntos.</p><p>E quais são esses Recursos / Loaders que iremos precisar ? E o que faz cada um deles?</p><p>Bom, vamos precisar dos seguintes recursos :</p><ul><li><strong>SASS:</strong> É um pré-processador CSS que permite você gerar CSS a partir de uma sintaxe única</li><li><strong>sass-loader:</strong> Loader Webpack que Compilas Sass para CSS</li><li><strong>node-sass:</strong> Compilar SASS para CSS recebendo um arquivo de entrada</li><li><strong>css-loader:</strong> Loader Webpack que resolve caminhos URL() e @imports no arquivo .css</li><li><strong>style-loader:</strong> Loader Webpack que compila SASS para CSS</li></ul><p>Para instalar esses recursos basta executar no seu projeto a seguinte linha de código usando o -d no final pra dizer que queremos eles como dependência do projeto:</p><pre><code>npm install sass sass-loader node-sass style-loader css-loader -d\n</code></pre><p>E agora, como usamos isso?</p><p>Tudo que precisamos fazer agora é configurar nosso Módulo webpack no arquivo de configuração do webpack - <strong>webpack.config.js</strong>:</p><pre><code>module: {\n    rules: [\n      {\n        test: /.scss$/i,\n        use: [\n          'style-loader',\n          'css-loader',\n          'sass-loader'\n        ]\n      }\n...\n</code></pre><p>Nessa Pequena parte do código, vamos inserir uma regra para testar nossos arquivos .scss usando nossos recursos (loaders), usando nessa ordem acima.</p><p>O que vai acontecer quando eu executar o build do webpack?</p><p>Bom, nosso webpack irá usar esses recursos para compilar todos nossos arquivo sass em css com o sass-loader, em seguida irá resolver no css em arquivos .js, as url's e imports, depois de compilado nosso loader style-loader irá inserir uma tag de estilo &lt;style&gt; em nossa página HTML com todo nosso css compilado.</p><p>Como verificamos se deu certo?</p><p>Uma das formas de ver isso é executar sua página em um live-server html e verificar se está tudo certo, para ver o estilo inserido, basta abrir as ferramentas de desenvolvedor do seu navegador apertando a tecla <strong>F12</strong> ou usando o botão direito e clicar em <strong>Inspecionar elemento.</strong></p><p>Se abrir a tag &lt;head&gt; verá que foi inserido a tag &lt;style&gt; em nosso arquivo.</p>`,
  },
];

function BlogPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <button
        onClick={() => window.history.back()}
        className="fixed top-4 right-4 bg-[#FFF3E0] text-black px-4 py-2 rounded-md z-10 shadow-md"
      >
        Voltar
      </button>
      <section className="flex justify-center py-12">
        <div className="container px-4 md:px-6">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6 text-gray-600">
                Por: <span className="text-purple-600">Rafael Martins</span>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  className="max-w-full h-auto"
                />
              </div>
              <Typography
                gutterBottom
                variant="h4"
                component="h1"
                className="text-gray-900"
              >
                {post.title}
              </Typography>
              <section>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="content-html prose prose-sm sm:prose lg:prose-lg mx-auto"
                ></div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
