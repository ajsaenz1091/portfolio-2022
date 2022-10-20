import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'

import './Footer.scss'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'footer',
  'app__whitebg'
)