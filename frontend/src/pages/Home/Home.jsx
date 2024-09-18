import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import BookDisplay from '../../components/BookDisplay/BookDisplay'
import PromoDisplay from '../../components/PromoDisplay/PromoDisplay'
import NewsletterForm from '../../components/Newsletter/NewsLetterForm'
import Services from '../../components/Services/Services'
import CostumerOpinion from '../../components/CostumerOpinion/CostumerOpinion'
// import CarouselAuthor from '../../components/CarouselAuthor/CarouselAuthor'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <BookDisplay category={category} />
      <PromoDisplay />
      {/* <CarouselAuthor /> */}
      <Services/>
      <NewsletterForm />
      <CostumerOpinion/>
    </>
  )
}

export default Home
