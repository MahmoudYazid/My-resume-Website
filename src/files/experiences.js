import React, { useState } from 'react'
import '../App.css'
export default function ContactComponentGui() {
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }
    const CardProjects = ({ link_, githublink, title, desc }) => {
        return (
            <div class="relative min-w-[13rem] h-80 bg-gray-50 rounded-2xl p-4  shadow shadow-sky-800 flex flex-col justify-around items-stretch">
                <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" class="stroke-blue-400 w-12 h-12 p-1 bg-sky-100 rounded-2xl">
                    <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M60.7,25v7.2m0,14.2v7.2m0,14.2V75M25,25a7.1,7.1,0,0,0-7.1,7.2V42.9a7.1,7.1,0,1,1,0,14.2V67.8A7.1,7.1,0,0,0,25,75H75a7.1,7.1,0,0,0,7.1-7.2V57.1a7.1,7.1,0,1,1,0-14.2V32.2A7.1,7.1,0,0,0,75,25Z">
                    </path>
                </svg>
                <span class="text-blue-400 font-semibold text-xl">{title}</span>
                <p class="text-base text-gray-600">{desc} </p>
                <div class="flex flex-col gap-2">
                  </div>
                <div class="absolute top-3 right-2  text-red-300 hover:text-red-500">


                </div>
            </div>
        )
    }

    const Card = () => {

        return (
            <div className={`border-2 border-black absolute bg-black w-[80%] min-h-[80%] grid grid-rows-[2.5rem_1fr] ${visibility}`}>

                <div className=' navbarbg flex flex-row pr-5 items-center'>
                    <div className='mr-auto '><p>Mahmoud Yazid Contact folder</p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className=' overflow-y-scroll bg-white flex  flex-row justify-start items-start gap-3 pt-3 pl-5'>
                    <CardProjects  title={'Freelance Full-stack  '} desc={'nodejs - react - next - express - Node js'} />
                    <CardProjects title={' SocialHub internship - Frontend Developer '} desc={'nodejs - react - next'} />
                   

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
