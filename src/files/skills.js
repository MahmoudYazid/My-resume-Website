import React, { useState } from 'react'
import '../App.css'
export default function ContactComponentGui() {
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }

    const Card = () => {

        return (
            <div className={`border-2 border-black absolute bg-black min-w-[60%] min-h-[80%] grid grid-rows-[2.5rem_1fr] ${visibility}`}>

                <div className=' navbarbg flex flex-row pr-5 items-center'>
                    <div className='mr-auto '><p> Skills folder</p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className='bg-white flex flex-wrap flex-row justify-start items-start gap-3 pt-3 pl-5'>
                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >React</p>
                    </div>

                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Html</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                    <div className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Css</p>
                    </div>

                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Javascript</p>
                    </div>

                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >tailwind</p>
                    </div>
                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Redux</p>
                    </div>

                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Next</p>
                    </div>
                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >React</p>
                    </div>
                  
                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Node</p>
                    </div>

                    <div  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/skills94.ico'></img>
                        <p >Express</p>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/file_icon.png'></img>
              <p > skills </p>
          </div>
          <Card></Card>
      </>
  )
}
