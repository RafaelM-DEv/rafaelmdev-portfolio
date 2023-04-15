import BlogSectionHero from './components/BlogSectionHero.js'
import BlogSectionHardSkills from './components/BlogSectionHardSkills.js'
import BlogSectionSoftSkills from './components/BlogSectionSoftSkills.js'
import BlogSectionProjects from './components/BlogSectionProjects.js'
import BlogSectionRecommendation from './components/BlogSectionRecommendation.js'
import BlogSectionContact from './components/BlogSectionContact.js'
import BlogSectionBlog from './components/BlogSectionBlog.js'

function App() {
  return (
      <span>
        <BlogSectionHero />
        <BlogSectionBlog />
        <BlogSectionHardSkills />
        <BlogSectionSoftSkills />
        <BlogSectionRecommendation />
        <BlogSectionProjects />
        <BlogSectionContact />
      </span>
  )
}
export default App