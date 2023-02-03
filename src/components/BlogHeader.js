import GitHubIcon from '@mui/icons-material/GitHub';

function BlogHeader () {
  return (
    <div className='bg-gray-600 flex justify-center w-screen h-auto  border-b-2 border-purple-400 px-2'>
      <header className="container items-center flex justify-between text-white h-16">
        <div className="font-bold text-lg cursor-pointer">RafaelM-<span className="text-purple-400">DEv</span></div>
        <nav className=" gap-x-10 hidden sm:flex">
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Blog </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Hard Skills </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Soft Skills </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Projetos </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Recomendações </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> Contato </div>
          <div className="hover:shadow-xl hover:text-purple-400 hover:underline cursor-pointer"> 
            <GitHubIcon />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default BlogHeader