// import BlogHeader from '../components/BlogHeader'
import { Outlet } from "react-router-dom";
// import { useRef } from "react"
// import App from '../App.js'

function layout () {
  // const blogRef = useRef<HTMLDivElement | null>(null)
  // <BlogHeader toReference={blogRef}/>
  return (
    <div className='relative'>
      <div id='detail'>
        <Outlet />
      </div>
    </div>
  )
}

export default layout