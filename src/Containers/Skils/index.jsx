import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

function Skils() {
  return (
    <section id='skils' className='skils'>
      <PageHeaderContent 
        headerText = 'My Skills'
        icon = {<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}

export default Skils