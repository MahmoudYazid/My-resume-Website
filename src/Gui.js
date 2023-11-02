import React, { useState } from 'react'
import './App.css'
import ContactComponentGui from './files/contactComponentGui'
import ProjectsComponentGui from './files/projectsComponentGui'
import Certificates from './files/certificates'
import Experiences from './files/experiences'
import Skills from './files/skills'

export default function Gui() {
    
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }
    const Card = ()=>{

        return(
            <div className={`absolute bg-black min-w-[60%] min-h-[80%] grid grid-rows-[2.5rem_1fr] ${visibility}`}>

                <div className=' bg-blue-500 flex flex-row-reverse pr-5 items-center'>

                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>                    


                </div>
                <div className='bg-white flex flex-wrap flex-row justify-start items-start gap-3 pt-3 pl-5'>
                   

                   

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Languages</p>
                    </div>

                    

                  


                
                </div>
            </div>
        )
    }
  
  return (
      <div id='file' className='gap-5  min-w-[100%] min-h-screen background-container items-start flex flex-col pl-5 justify-start '>
          
          <ContactComponentGui></ContactComponentGui>
          <ProjectsComponentGui></ProjectsComponentGui>
          <Certificates></Certificates>
          <Experiences></Experiences>
          <a href="/Mahmoud Abuelyazid cv.pdf" className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/file_icon.png'></img>
              <p >cv Pdf</p>
          </a>
          <Skills></Skills>

        <a href='/cmd'>
          <img src='/Hopstarter-Sleek-Xp-Software-Command-Prompt.256.png' className='w-[3rem] h-[3rem]'></img>
          </a>
    </div>
  )
}
