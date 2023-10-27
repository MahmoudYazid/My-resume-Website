import React, { useState } from 'react'
import './App.css'
import ContactComponentGui from './files/contactComponentGui'
export default function Gui() {
    
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }
    const Card = ()=>{

        return(
            <div className={`absolute bg-black min-w-[60%] min-h-[80%] grid grid-rows-[2.5rem_1fr] ${visibility}`}>

                <div className=' bg-blue-500 flex flex-row-reverse pr-5 items-center'>

                    <div onClick={() => ChangeVisibiliy()} role="button" className="button-cancel">x</div>
                    


                </div>
                <div className='bg-white flex flex-wrap flex-row justify-start items-start gap-3 pt-3 pl-5'>
                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Experiences</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Skill</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Languages</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Techincal Certificates</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >Projects</p>
                    </div>
                  

                    <ContactComponentGui></ContactComponentGui>

                    <a href="/Mahmoud Abuelyazid cv.pdf"   className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >cv Pdf</p>
                    </a>
                </div>
            </div>
        )
    }
  
  return (
      <div id='file' className=' min-w-[100%] min-h-screen background-container items-center flex justify-center '>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img   src='/file_icon.png'></img>
              <p >Mahmoud Yaizd Cv File</p>
        </div>
          <Card></Card>

    </div>
  )
}
