import React, { useState } from 'react'
import './App.css'
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
                  

                    <a href="/Mahmoud Abuelyazid cv.pdf"   className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >cv Pdf</p>
                    </a>
                </div>
            </div>
        )
    }
  
  return (
      <div id='file' className=' gap-5 min-w-[100%] min-h-screen background-container items-center flex justify-center '>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img   src='/file_icon.png'></img>
              <p >Mahmoud Yaizd Cv File</p>
        </div>
          <a href='/cmd'  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/cmd.png'></img>
              <p >Cmd</p>
          </a>
          <Card></Card>

    </div>
  )
}
