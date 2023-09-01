import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact' className='contact'>
    <PageHeaderContent 
      headerText = 'My Contact'
      icon = {<BsInfoCircleFill size={40} />}
    />
  </section>
  )
}

export default Contact