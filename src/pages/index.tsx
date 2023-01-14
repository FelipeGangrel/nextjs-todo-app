import { NextPage } from 'next'
import { Button, Header } from '@/components'

import { styled } from '@root/stitches.config'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
  padding: '$3',
})

const Home: NextPage = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <Header />
      <Container>
        <Button onClick={handleClick}>Click me</Button>
        <Button color='primary' onClick={handleClick}>
          Click me
        </Button>
        <Button color='danger' onClick={handleClick}>
          Click me
        </Button>
      </Container>
    </>
  )
}

export default Home
