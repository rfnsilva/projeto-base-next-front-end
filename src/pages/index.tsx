import React from 'react'
import Head from 'next/head'

import { Container, Image } from '../styles/pages/Home'
import imageFundo from '../assets/imagem2.jpeg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      {/* <img src={imageFundo} alt="imagem de fundo"/> */}

      <h1>Hello World</h1>
    </Container>
  )
}

export default Home
