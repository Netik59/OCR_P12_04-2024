import React, { useState, useEffect } from 'react'

const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText((prev) => prev + text[charIndex])
        setCharIndex((prev) => prev + 1)
      }
    }, 100)

    return () => clearInterval(textInterval)
  }, [charIndex, text])

  return <>{displayText}</>
}

export const Start = ({ title, description }) => {
  return (
    <section className="start" id="home">
      <div className="overlay"></div>
      <div className="center">
        <h1>
          <AnimatedText text={title} />
        </h1>
        <p>
          <AnimatedText text={description} />
        </p>
      </div>
    </section>
  )
}
