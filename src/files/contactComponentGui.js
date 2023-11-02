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

                <div className=' bg-blue-500 flex flex-row pr-5 items-center'>
                    <div className='mr-auto '><p>Mahmoud Yazid Contact folder</p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className='bg-white flex flex-wrap flex-row justify-start items-start gap-3 pt-3 pl-5'>
                    <a href='https://www.upwork.com/freelancers/mahmoudy6' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >upwork</p>
                    </a>

                    <a href='https://www.freelancer.com/u/MahmoudabuYazid'  className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >freelance</p>
                    </a>

                    <a href='https://www.linkedin.com/in/mahmoud-abuelyazid-2a7211211/' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >linkedin</p>
                    </a>

                    <a href='https://www.facebook.com/Dr.MahmoudYazid/' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >facebook</p>
                    </a>

                  
                </div>
            </div>
        )
    }
  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/file_icon.png'></img>
              <p > contact </p>
          </div>
          <Card></Card>
      </>
  )
}
