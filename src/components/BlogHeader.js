import GitHubIcon from '@mui/icons-material/GitHub';

function BlogHeader () {
  return (
    <div className='bg-gray-600 flex justify-center w-screen h-auto border-b-2 border-blue-600 px-2'>
      <header className="container items-center flex justify-between text-slate-200 h-16">
        <div className="font-bold text-lg cursor-pointer">RafaelM-<span className="text-purple-400">DEv</span></div>
        <nav className=" gap-x-10 hidden sm:flex">
          <a href='#blog' className=" hover:text-purple-400 cursor-pointer"> Blog </a>
          <a href='#hard' className=" hover:text-purple-400 cursor-pointer"> Hard Skills </a>
          <a href='#soft' className=" hover:text-purple-400 cursor-pointer"> Soft Skills </a>
          <a href='#project' className=" hover:text-purple-400 cursor-pointer" > Projetos </a>
          <a href='#qotes' className=" hover:text-purple-400 cursor-pointer"> Recomendações </a>
          <a href='#contact' className=" hover:text-purple-400 cursor-pointer"> Contato </a>
          <a href='https://github.com/RafaelM-DEv' target='_blank' className=" hover:text-purple-400 cursor-pointer" rel="noreferrer"> 
            <GitHubIcon />
          </a>
        </nav>
      </header>
    </div>
  )
}

export default BlogHeader