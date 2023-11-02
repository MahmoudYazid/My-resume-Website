import React, { useDebugValue, useEffect } from 'react'
import './file.css'
import { useNavigate } from "react-router-dom";

export default function File() {
    const Nav = useNavigate()

    setTimeout(()=>{
        Nav('/gui')

    },5000)
  return (
      <div class="flex flex-col justify-center items-center w-screen h-screen">
          <div class="logoW">
              <p class="topW">Wellcome </p>
              <p class="midW">Mahmoud Yazid<span>portfolio</span></p>
              <p class="bottomW">Cmd Will open Now</p>
          </div>
          <div class="containerW">
              <div class="boxW"></div>
              <div class="boxW"></div>
              <div class="boxW"></div>
          </div>
      </div>
  )
}
