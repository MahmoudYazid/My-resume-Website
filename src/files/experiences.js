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
    const CardProjects = ({ link_, githublink, title, desc }) => {
        return (
      
                <span class="text-blue-400 font-semibold text-xl">{title}</span>
               
        )
    }

    const Card = () => {

        return (
            <div className={`border-2 border-black absolute bg-black w-[80%] min-h-[80%] grid grid-rows-[2.5rem_2.5rem_4rem_1fr] ${visibility}`}>

                <div className=' navbarbg flex flex-row pr-5 items-center'>
                    <div className='mr-auto '><p> experiences </p></div>
                    <button className='cancelbtm' onClick={() => ChangeVisibiliy()}>
                        x
                    </button>



                </div>
                <div className=' navbarbg flex flex-row  justify-center items-center'>
                    <div className=' mr-5'><p> location</p></div>
                    <input type='text' className='bg-white w-[50%]' value={'www.MahmoudYazidCv.com/experiences'}>
                        
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
              
                <div className=' overflow-y-scroll bg-white flex  flex-row justify-center items-center gap-3 pt-3 pl-5'>
                    <CardProjects  title={'Freelance Full-stack  '} desc={'nodejs - react - next - express - Node js'} />
                    
                    <img src='/arrow.svg' className='w-[2.5rem] h-[2.5rem]'></img>
                    
                    <CardProjects title={' SocialHub internship - Frontend Developer '} desc={'nodejs - react - next'} />
                   

                </div>
            </div>
        )
    }
  return (
    <>
          <div onClick={() => ChangeVisibiliy()} className='hover:bg-blue-200 hover:cursor-pointer flex flex-col justify-center items-start'>
              <img src='/file_icon.png'></img>
              <p > experiences </p>
          </div>
          <Card></Card>
      </>
  )
}
