import React from 'react'
import Navbar from './navbar'
import SkillsSwipper from './SkillsSwipper'
import Titles from './titles'
import ProjectsSwipper from './ProjectsSwipper'
import Experiences from './experiences'
import Contactus from './contactus'
import CertifcateSwipper from './CertifcateSwipper'


export default function main() {
  return (
    <div className='overflow-hidden backgroundGeneral grid grid-rows-[30rem_3rem_30rem_3rem_30rem_3rem_30rem_3rem__30rem_3rem__30rem] gap-5'>
         
          <Navbar></Navbar>
      <Titles title={'My Skills'}></Titles>
          <div className='bg-[#212121] flex justify-center items-center'>
        <SkillsSwipper></SkillsSwipper>
          </div>
      <Titles title={'My Projects'}></Titles>
      <ProjectsSwipper></ProjectsSwipper>
      <Titles title={'experiences'}></Titles>
        <Experiences></Experiences>
      <Titles title={'Certificates'}></Titles>

        <CertifcateSwipper></CertifcateSwipper>
      <Titles title={'contact us'}></Titles>

      <Contactus></Contactus>
      
    </div>
  )
}
