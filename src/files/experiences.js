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
                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >upwork</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >freelance</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >linkedin</p>
                    </div>

                    <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
                        <img src='/file_icon.png'></img>
                        <p >facebook</p>
                    </div>

                  
                </div>
            </div>
        )
    }
  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/file_icon.png'></img>
              <p > experiences </p>
          </div>
          <Card></Card>
      </>
  )
}
