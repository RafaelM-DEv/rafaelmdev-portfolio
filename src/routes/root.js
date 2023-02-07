import BlogHeader from '../components/BlogHeader'
import { Outlet } from "react-router-dom";

// import App from '../App.js'
function layout () {
  return (
    <div className='relative'>
      <BlogHeader />
      <div id='detail'>
        <Outlet />
      </div>
    </div>
  )
}

export default layout