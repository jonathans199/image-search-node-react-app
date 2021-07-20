import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = data.length

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <>
      {data.length !== 0 && (
        <div className='slider'>
          <FaChevronLeft className='arrow' onClick={prevSlide} />
          {data.map((item, index) => {
            return (
              <div key={item.id}>{index === currentSlide && <img className='slider-image' src={item.cover_photo.urls.small} alt='slider pic' />}</div>
            )
          })}
          <FaChevronRight className='arrow' onClick={nextSlide} />
        </div>
      )}
      <div style={{ padding: '0 20%' }}>
        {data.map((item, index) => {
          return (
            <a key={item.id} onClick={() => setCurrentSlide(index)} style={{ width: '200px' }}>
              <img style={{ width: '100px', height: '100px', objectFit: 'cover' }} src={item.cover_photo.urls.regular} alt='slider pic' />
            </a>
          )
        })}
      </div>
      <small> by Jonathan Sanchez </small>
    </>
  )
}

export default Slider
