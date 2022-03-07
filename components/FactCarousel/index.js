import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import css from "./carousel.module.css"


const FactCarousel = () => {
    return (
        <Carousel fade className={css.carousel}>
  <Carousel.Item className={css.item}>
      <div> Over 1/3 of all food produced globally goes to waste.</div>
  </Carousel.Item>
  <Carousel.Item className={css.item}>
      <div>2.3 billion people are joining the planet by 2050 – this will require a 60-70% increase in global food production. Or we can just stop throwing away our food!
</div>
  </Carousel.Item>
  <Carousel.Item className={css.item}>
      <div>All the world’s nearly one billion hungry people could be fed on less than a quarter of the food that is wasted in the US, UK and Europe.</div>
  </Carousel.Item>
</Carousel>
    )
}
export default FactCarousel