export const Start = ({ title, description }) => {
  return (
    <section className="start">
      <div className="overlay"></div>
      <div className="center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
