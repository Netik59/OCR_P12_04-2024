import { AboutMe } from '../../common/components/AboutMe'
import Footer from '../../common/components/Footer'
import { ProjectCard } from '../../common/components/ProjectCard'
import { Start } from '../../common/components/Start'
import projects from '../../data/projects.json'
import '../../utils/style/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialisez AOS avec la durée d'animation souhaitée
  }, [])

  return (
    <main>
      <Start
        title="MY WORKS"
        description="Transforming Concepts Into Memorable Creations"
      />
      <section className="projects-container" id="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            tags={project.tags}
            className={project.className}
            effectNumber={project.effectNumber}
            data-aos="fade-up"
            link={project.link}
          />
        ))}
      </section>
      <AboutMe />
      <Footer
        a1={'Home'}
        href1={'#home'}
        a2={'Projects'}
        href2={'#projects'}
        a3={'About Me'}
        href3={'#aboutMe'}
        a4={'Contact'}
        href4={'/contact'}
      />
    </main>
  )
}
