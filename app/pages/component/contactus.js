import Head from 'next/head'
import React from 'react'
import Titles from './titles'
export default function contactus() {
  return (
<>

          <div class="  container pl-[10%] pr-[10%]  min-w-[100%] gap-[2rem] flex flex-row flex-wrap justify-center items-start">
             
              <a href='https://www.linkedin.com/in/mahmoud-abuelyazid-2a7211211/'>
                  <Titles title={'Linkedin'}></Titles>

              </a>
              
              <a href='https://github.com/MahmoudYazid'>
              <Titles title={'github'}></Titles>
              </a>


              <a href='https://www.upwork.com/freelancers/mahmoudy6' >

              <Titles title={'upwork'}></Titles>
              </a>

              <a href='https://www.freelancer.com/u/MahmoudabuYazid'  >
              <Titles title={'Freelancer'}></Titles>
              </a>

              <Titles title={'+201005648558'}></Titles>
      </div>
      </>


  )
}
