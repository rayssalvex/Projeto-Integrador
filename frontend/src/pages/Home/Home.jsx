import React, { useState } from 'react'
import Header from '../../components/Header/Header'
// import Banner from '../../components/Banner/Banner'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import BookDisplay from '../../components/BookDisplay/BookDisplay'
import PromoDisplay from '../../components/PromoDisplay/PromoDisplay'
import NewsletterForm from '../../components/Newsletter/NewsLetterForm'
import Services from '../../components/Services/Services'
// import Slider from '../../components/Slider/Slider'
import CostumerOpinion from '../../components/CostumerOpinion/CostumerOpinion'
const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header />
      {/* <Banner /> */}
      <ExploreMenu setCategory={setCategory} category={category} />
      <BookDisplay category={category} />
      <PromoDisplay />
      <Services/>
      <NewsletterForm />
      <CostumerOpinion/>
    </>
  )
}

export default Home
