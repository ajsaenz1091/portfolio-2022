import React, {useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
import { urlFor, client } from '../../client'

const Testimonial = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)

  const handleClick = (idx) => {
    setCurrentIdx(idx)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data)
    })

    client.fetch(query)
    .then((data) => {
      setTestimonials(data)
    })
  }, [])

  const testimonial = testimonials[currentIdx];

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonial.imageurl)} alt='testimonial'/>
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonial.name}</h4>
                <h5 className='p-text'>{testimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIdx === 0 ? testimonials.length - 1 : currentIdx - 1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIdx === testimonials.length - 1 ? 0 : currentIdx + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: [0.5], type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonial',
  'app__primarybg'
)