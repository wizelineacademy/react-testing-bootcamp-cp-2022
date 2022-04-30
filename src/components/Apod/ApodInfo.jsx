import { Card, Grid, Row, Text, Image } from '@nextui-org/react'

export const ApodInfo = (apod) => {
  const { title, url, date, explanation } = apod

  return (
    <Card>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={12}>
          <Row>
            <h1>{title}</h1>
          </Row>
        </Grid>
        <Grid xs={12} md={6} direction="column">
          <Row>
            <Image src={url} alt={title} loading="eager" showSkeleton />
          </Row>
          <Row justify="flex-end">
            <em><strong><time dateTime={date}>{date}</time></strong></em>
          </Row>
        </Grid>
        <Grid xs={12} md={6}>
          <Row>
            <Text blockquote>{explanation}</Text>
          </Row>
        </Grid>
      </Grid.Container>
    </Card>
  )
}
