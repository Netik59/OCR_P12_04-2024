import { useEffect } from 'react'
import { AboutMe } from '../../common/components/AboutMe'
import Footer from '../../common/components/Footer'
import { ProjectCard } from '../../common/components/ProjectCard'
import { Start } from '../../common/components/Start'
import projects from '../../data/projects.json'
import '../../utils/style/index.css'

const useIntersectionObserver = () => {
  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    }

    const observer = new IntersectionObserver(callback, { threshold: 0.2 }) // Trigger earlier

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((element) => observer.observe(element))

    return () => {
      if (observer) {
        elements.forEach((element) => observer.unobserve(element))
      }
    }
  }, [])
}

export const Home = () => {
  useIntersectionObserver()

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
            className={`${project.className} fade-up`} // Add fade-up class here
            effectNumber={project.effectNumber}
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
