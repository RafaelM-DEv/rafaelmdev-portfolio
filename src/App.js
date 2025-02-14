import BlogSectionHero from "./components/BlogSectionHero.js";
import BlogSectionHardSkills from "./components/BlogSectionHardSkills.js";
import BlogSectionSoftSkills from "./components/BlogSectionSoftSkills.js";
import BlogSectionProjects from "./components/BlogSectionProjects.js";
// import BlogSectionRecommendation from "./components/BlogSectionRecommendation.js";
import BlogSectionContact from "./components/BlogSectionContact.js";
import BlogSectionBlog from "./components/BlogSectionBlog.js";
import BlogHeader from "./components/BlogHeader";
import { useRef } from "react";

function App() {
  const blogRef = useRef(null);
  const hardSkillRef = useRef(null);
  const softSkillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRefs = [
    blogRef,
    hardSkillRef,
    softSkillRef,
    projectRef,
    contactRef,
  ];

  return (
    <span>
      <BlogHeader scrollToRefs={scrollToRefs} />
      <BlogSectionHero />
      <BlogSectionBlog toRef={blogRef} />
      <BlogSectionHardSkills toRef={hardSkillRef} />
      <BlogSectionSoftSkills toRef={softSkillRef} />
      <BlogSectionProjects toRef={projectRef} />
      <BlogSectionContact toRef={contactRef} />
    </span>
  );
}
export default App;
