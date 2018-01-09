import React from 'react'

import Layout from '../template/Layout.js'
import Navbar from '../organism/NavBar.js'
import Banner from '../organism/Banner.js'
import Content from '../organism/Content.js'
import Footer from '../organism/Footer.js'

class CardList extends React.Component {
  render() {
    return(
      <Layout>
        <Navbar />
        <Banner />
        <Content />
        <Footer />
      </Layout>
      )
  }
}

export default CardList