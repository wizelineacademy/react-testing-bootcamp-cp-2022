export const ApodError = (error) => {
  const { msg } = error

  return (
    <section>
      <p>❌ There was an error, please try again.</p>
      <p>{msg}</p>
    </section>
  )
}
