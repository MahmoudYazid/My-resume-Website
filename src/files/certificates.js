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
                    <div className='mr-auto '><p>certificates folder</p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className='bg-white flex flex-wrap flex-row justify-center items-start gap-3 '>
                    <a href='https://yazid-resume.vercel.app/frontend.pdf' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/exp94.ico'></img>
                        <p >Frontend Certificate</p>
                    </a>

                    <a href='https://yazid-resume.vercel.app/code%20academy%20ui%20%20ux.pdf' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/exp94.ico'></img>
                        <p >ui ux Certificate</p>
                    </a>

                    <a href='https://yazid-resume.vercel.app/img/A1%20CERTIFICATE.pdf' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/exp94.ico'></img>
                        <p >Germany A1 Certificate</p>
                    </a>

                    <a href='https://yazid-resume.vercel.app/img/ielts%20certificate.pdf' className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/exp94.ico'></img>
                        <p >ielts Certificate</p>
                    </a>
                    <a href="/img/pharmacy certificate.pdf" className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/exp94.ico'></img>
                        <p >pharmacy Certificate</p>
                    </a>

                  
                </div>
            </div>
        )
    }
  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-start'>
              <img src='/file_icon.png'></img>
              <p > certificates </p>
          </div>
          <Card></Card>
      </>
  )
}
