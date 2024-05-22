import { AboutMe } from '../../common/components/AboutMe'
import { ProjectCard } from '../../common/components/ProjectCard'
import { Start } from '../../common/components/Start'
import projects from '../../data/projects.json'
import '../../utils/style/index.css'

export const Home = () => {
  return (
    <main>
      <Start
        title="MY WORKS"
        description="Transforming Concepts Into Memorable Creations"
      />
      <section className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            tags={project.tags}
            className={project.className}
            effectNumber={project.effectNumber}
          />
        ))}
      </section>
      <AboutMe />
    </main>
  )
}
