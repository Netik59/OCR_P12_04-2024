import { useState } from 'react'
import slides from '../../data/slides.json'

export const AboutMe = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animationClass, setAnimationClass] = useState('')

  const nextSlide = () => {
    setAnimationClass('next entering')
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setAnimationClass('next')
      setTimeout(() => {
        setAnimationClass('')
      }, 500)
    }, 0)
  }

  const prevSlide = () => {
    setAnimationClass('prev entering')
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setAnimationClass('prev')
      setTimeout(() => {
        setAnimationClass('')
      }, 500)
    }, 0)
  }

  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">About me</h2>
      <div className="aboutMe__slider">
        <img
          className="chevron chevron__right"
          src="https://assets-global.website-files.com/64da3cdd1d11a292e297fca8/66297feb15fed9fd874c3ca5_Right%20Arrow.svg"
          alt="Chevron vers la droite"
          onClick={nextSlide}
        />
        <img
          className="chevron chevron__left"
          src="https://assets-global.website-files.com/64da3cdd1d11a292e297fca8/66297feb65c6580234223f50_Left%20Arrow.svg"
          alt="Chevron vers la gauche"
          onClick={prevSlide}
        />
        <div className={`aboutMe__div ${animationClass}`}>
          <ul className="bullets">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              ></li>
            ))}
          </ul>
          <p className="aboutMe__text">{slides[currentSlide]}</p>
        </div>
      </div>
    </section>
  )
}
