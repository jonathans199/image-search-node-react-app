import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = data.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  return (
    <div className='slider'>
      <FaChevronLeft className='left-arrow' onClick={prevSlide} />
      {data.map((item, index) => {
        return <div key={item.id}>{index === currentSlide && <img className='slider-image' src={item.cover_photo.urls.small} />}</div>
      })}
      <FaChevronRight className='right-arrow' onClick={nextSlide} />
    </div>
  )
}

export default Slider
