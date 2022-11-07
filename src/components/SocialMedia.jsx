import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/albertogonzalez1027' target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
        </div>
        <div>
        <a href='https://github.com/ajsaenz1091' target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia