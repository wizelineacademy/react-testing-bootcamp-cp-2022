import { Text } from '@nextui-org/react'

export const Header = () => {
  return (
    <header>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue500 -20%, $pink500 50%",
        }}
        weight="bold"
        transform="capitalize"
      >
        astronomy picture of the day
      </Text>
    </header>
  )
}
