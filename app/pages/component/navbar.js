import React from 'react'

export default function navbar() {
  return (
      <div className='backgroundGeneral flex justify-center items-center'>
          <div class="card justify-center items-center flex  ">
              <div class="loader flex lg:flex-row flex-col justify-center items-center  gap-3 ">
                  <p>Mahmoud Abuelyazid <span className='hidden lg:inline-flex'>~&gt;</span></p>
                  <div class="words ">
                      <span class="word flex flex-row  justify-center items-center"></span>
                      <span class="word  flex flex-row  justify-center items-center text-center">Frontend Developer</span>

                      <span class="word flex flex-row  justify-center items-center text-center">React Js</span>
                      <span class="word flex flex-row  justify-center items-center text-center">Angular Js</span>
                      <span class="word flex flex-row  justify-center items-center text-center">React Native</span>

                      <span class="word">Contact Me Now</span>
             

                  </div>
                  
                  <p> <span className='hidden lg:inline-flex'>~&gt;	</span> Download My cv</p>
                  <a href='/img/Mahmoud Abuelyazid cv.pdf' class="DownloadBtn">
                      <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                      <span class="icon2"></span>
                  </a>
              </div>
          </div>
      </div>
  )
}
