export const Apod = (apod) => {
  const { date, title, url, explanation, } = apod
  
  return (
    <article>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
      <img src={url} alt={title} loading="eager" />
      <p>{explanation}</p>
    </article>
  )
}
