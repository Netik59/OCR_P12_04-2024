import { ProjectCard } from '../../common/components/ProjectCard'
import projects from '../../data/projects.json'
import '../../utils/style/index.css'

export const Home = () => {
  return (
    <>
      <section class="start">
        <div class="overlay"></div>
        <div class="center">
          <h1>MY WORKS</h1>
          <p>Transforming Concepts Into Memorable Creations</p>
        </div>
      </section>
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
    </>
  )
}
