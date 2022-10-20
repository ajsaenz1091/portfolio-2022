import React, {useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'

import './Testimonial.scss'
import { urlFor, client } from '../../client'

const Testimonial = () => {
  return (
    <div>Testimonial</div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonials'), 
  'testimonials'
)