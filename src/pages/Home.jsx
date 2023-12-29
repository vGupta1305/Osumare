import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import Navigating from '../components/Navigating'
import Introduction_2 from '../components/Introduction_2'
import Features from '../components/Features'
import Peace from '../components/Peace'
import Review from '../components/Review'
import Questions from '../components/Questions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Box } from '@mui/material'


const Home = () => {
  return (
    <Box>
      <Nav />
      <Header />
      <Introduction />
      <Services />
      <Navigating />
      <Introduction_2 />
      <Features/>
      <Peace />
      <Review />
      <Questions />
      <Contact />
      <Footer />
    </Box>
  )
}

export default Home
