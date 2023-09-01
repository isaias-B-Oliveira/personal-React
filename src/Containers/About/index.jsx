import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/PageHeaderContainer'

function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        headerText = 'Aboute Me'
        icon = {<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}

export default About