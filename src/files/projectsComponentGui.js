import React, { useState } from 'react'
import '../App.css'
import { IoReturnUpBackSharp, IoReturnUpForwardOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { AiOutlineHome, AiOutlineReload } from 'react-icons/ai'

export default function ContactComponentGui() {
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }
    const CardProjects=({link_,githublink,title,desc})=>{
        return(
            <div class="relative min-w-[13rem] h-80 bg-gray-50 rounded-2xl p-4  shadow shadow-sky-800 flex flex-col justify-around items-stretch">
                <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" class="stroke-blue-400 w-12 h-12 p-1 bg-sky-100 rounded-2xl">
                    <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M60.7,25v7.2m0,14.2v7.2m0,14.2V75M25,25a7.1,7.1,0,0,0-7.1,7.2V42.9a7.1,7.1,0,1,1,0,14.2V67.8A7.1,7.1,0,0,0,25,75H75a7.1,7.1,0,0,0,7.1-7.2V57.1a7.1,7.1,0,1,1,0-14.2V32.2A7.1,7.1,0,0,0,75,25Z">
                    </path>
                </svg>
                <span class="text-blue-400 font-semibold text-xl">{title}</span>
                <p class="text-base text-gray-600">{desc} </p>
                <div class="flex flex-col gap-2">
                    <a href={link_} class="text-center border-2 border-blue-400 bg-blue-400 py-1 rounded text-gray-50 hover:bg-blue-300">Link</a>
                    <a href={githublink} class=" text-center border-2 border-blue-400 py-1 rounded hover:bg-gray-100">Github</a>
                </div>
                <div class="absolute top-3 right-2  text-red-300 hover:text-red-500">
                    

                </div>
            </div>
        )
    }


    const Card = () => {

        return (
            <div className={`border-2 border-black absolute bg-black w-[80%] min-h-[80%] grid grid-rows-[2.5rem_2.5rem_4rem_1fr] ${visibility}`}>

                <div className=' navbarbg flex flex-row pr-5 items-center'>
                    <div className='mr-auto '><p> projects - Netscape</p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className=' navbarbg flex flex-row  justify-center items-center'>
                    <div className=' mr-5'><p> location</p></div>
                    <input type='text' className='bg-white w-[50%]' value={'www.MahmoudYazidCv.com/projects'}>

                    </input>
                    <dev className='navbarbg h-[60%] w-[2rem] flex justify-center items-center' >
                        <MdOutlineKeyboardArrowDown size={20}></MdOutlineKeyboardArrowDown>
                    </dev>



                </div>
                <div className=' gap-5 navbarbg flex flex-row-reverse overflow-scroll pr-5 items-start'>
                    <img src='/Netscape_icon.svg' className='cancelbtm w-[8em] h-[100%] ml-auto'></img>

                    <button className='cancelbtm h-[90%]  ' >
                        <AiOutlineReload size={20}></AiOutlineReload>
                    </button>
                    <button className='cancelbtm h-[90%]' >
                        <AiOutlineHome size={20}></AiOutlineHome>
                    </button>
                    <button className='cancelbtm h-[90%]' >
                        <IoReturnUpForwardOutline size={20}></IoReturnUpForwardOutline>
                    </button>
                    <button className='cancelbtm h-[90%] ' >
                        <IoReturnUpBackSharp size={20}></IoReturnUpBackSharp>

                    </button>


                </div>

                <div className=' overflow-y-scroll bg-white flex  flex-row justify-start items-center gap-3 pt-3 pl-5'>
                    <CardProjects link_={'https://social-hub-ui.vercel.app/'} githublink={'https://github.com/MahmoudYazid/SocialHub-Ui'} title={'SocialHub Web-Page'} />
                    <CardProjects link_={'https://augmntxpages.vercel.app/'} githublink={'https://github.com/MahmoudYazid/augmntxpages'} title={'augmntx Web-Page'} />
                    <CardProjects link_={'https://online-resturant-program.vercel.app/'} githublink={'https://github.com/MahmoudYazid/online-resturant-program/tree/main'} title={'Restauant Online System End-to-End (NextJs)'} />
                    <CardProjects link_={'https://whats-app-cloning-porject.vercel.app/'} githublink={'https://github.com/MahmoudYazid/WhatsApp-Cloning-Porject'} title={'What`s-App Cloning Landing Page'} />
                    <CardProjects link_={'https://instegram-cloning.vercel.app/'} githublink={'https://github.com/MahmoudYazid/InstegramCloning'} title={'instegram Clone Landing Page'} />
                    <CardProjects link_={'https://play.google.com/store/apps/details?id=com.pharmaclonetrailer'} githublink={'https://github.com/MahmoudYazid/pharmaclone-limited'} title={'Pharmaclone App React Native'} />



                </div>
            </div>
        )
    }

  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-center'>
              <img src='/file_icon.png'></img>
              <p >projects </p>
          </div>
          <Card></Card>
      </>
  )
}
