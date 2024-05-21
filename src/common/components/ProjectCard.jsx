import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ProjectCard = ({
  imageSrc,
  title,
  description,
  tags,
  className,
  effectNumber,
}) => {
  return (
    <>
      <div className={`project ${className}`}>
        <div>
          <img
            className="homepage"
            src={imageSrc}
            alt={`Page d'accueil du projet ${title}`}
          />
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
          <div className="view_project">
            <p>View project</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon chevron-right"
            />
          </div>
        </div>
        <div className="project__backdrop"></div>
        <a className="projet__link" href="#">
          <span className="view">View</span>
        </a>
      </div>
      <div className={`effects ${effectNumber}`}></div>
    </>
  )
}
