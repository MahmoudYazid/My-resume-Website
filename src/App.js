import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import { FcOpenedFolder } from 'react-icons/fc'
function App() {
  const InputRef=useRef('')
  const Container = useRef()

  const helpOrder=()=>{
    
      const ContainerId=document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>Write cv -> to open My Cv</div>' 
    + '<div>Write work -> to open My past work</div>'+
      '<div>Write certificate -> to open My Certificates</div>'+
      '<div>Write exp -> to log My experiences</div>'+
      '<div>Write info -> to tell You everyThing</div>' 
    
  }
  const ShowCv = () => {

    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>Open Database .....</div>'
      + '<div>Search For Cv .....</div>' +
      '<div class="underline  text-[1.5rem]">Show The File ...... </div>'+
      '<a href="/Mahmoud Abuelyazid cv.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open Cv</div></a>'

  }

  const ShowCertificate = () => {

    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>Open Database .....</div>'
      + '<div>Search For certificate .....</div>' +
      '<div class="underline  text-[1.5rem]">Show The File ...... </div>' +
      '<a href="/A1 CERTIFICATE.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  germany A1 level Certificate</div></a>'+
      '<a href="/frontend.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Frontend Certificate</div></a>' +

      '<a href="/ielts certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Ielts Certificate</div></a>' +
      '<a href="/code academy ui  ux.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  ui/ux  Certificate</div></a>' +
      '<a href="/pharmacy certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  pharmacy Ba Certificate</div></a>'

  }

  const Exp=()=>{
    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>Open Database .....</div>'
      + '<div class="underline  text-[1.5rem]">My Experiences</div>' +
      '<div>InternShip in SocialHub </div>' +
      '<div>Freelancer At <a href="https://www.upwork.com/freelancers/mahmoudy6" class="hover:underline">(Click To Go) Upwork </a> And <a href="https://www.freelancer.com/u/MahmoudabuYazid" class="hover:underline">(Click To Go) FreeLance </a> </div>'
      
  }

  const wrongInput = () => {
    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>check Code .... </div>'
      + '<div>Make Sure that You wrote the code In good way please write help again</div>' 
  }

  const clear = () => {
    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div>clear Done .... </div>'
      
  }

  const info=()=>{
    const ContainerId = document.getElementById('newCodeContainer')
    ContainerId.innerHTML = '<div class="  text-[1.5rem] ">*this is the cv .... </div>'+
    '<a href="/Mahmoud Abuelyazid cv.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open Cv</div></a>'
      + '<div class="  text-[1.5rem] ">*My Experiences</div>' +
      '<div>InternShip in SocialHub </div>' +
      '<div>Freelancer At <a href="https://www.upwork.com/freelancers/mahmoudy6" class="hover:underline">(Click To Go) Upwork </a> And <a href="https://www.freelancer.com/u/MahmoudabuYazid" class="hover:underline">(Click To Go) FreeLance </a> </div>'
   
      + '<div class="  text-[1.5rem] ">*My Certificates</div>' 

      + '<a href="/A1 CERTIFICATE.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  germany A1 level Certificate</div></a>' +
      '<a href="/frontend.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Frontend Certificate</div></a>' +

      '<a href="/ielts certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Ielts Certificate</div></a>' +
      '<a href="/code academy ui  ux.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  ui/ux  Certificate</div></a>' +
      '<a href="/pharmacy certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  pharmacy Ba Certificate</div></a>'

 
  }
const onKeyPressAction=(event)=>{
  if (event.key === "Enter" ) {
    switch (InputRef.current.value) {
      case "help":
        helpOrder()

        break;
      case "cv":
        ShowCv()

        break;
      case "certificate":
        ShowCertificate()

        break;
      case "exp":
        Exp()

        break;
      case "info":
        info()

        break;
      case "clear":
        clear()

        break;
      default:
        wrongInput()
        break;
    }
  }




}
  const ScreenCode=()=>(
    <div class="container">
      <div class="window" >
        <div class="window-title">
          <p>Yazid Console </p>
          <div class="window-buttons">
            <div class="window-button fullscreen"></div>
            <div class="window-button reduce"></div>
            <div class="window-button close"></div>
          </div>
        </div>
        <div class="console">
          <pre><code>
            Hello I am Mahmoud abuelyazid
            <br></br>
            I Am frontend Developer
            <br></br>
           
              I will give you the opportunity to hack My Website

           
            <br></br>
            Now write help to Give you the code
            <br></br>

           -------------------------
            <br></br>
            <div ref={Container} id="newCodeContainer">


            </div>
            <div className='flex flex-row'>
              &rarr;
              
              <input onKeyDown={onKeyPressAction} ref={InputRef} type='text' className='border-transparent border-2 outline-none	 bg-transparent'></input>

            </div>
            </code></pre>
        </div>
      </div>
    </div>


  )
  return (

    <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-video absolute top-0 left-0 w-full h-full">
        <video id="video-background" muted  autoPlay  loop className="w-full h-full object-cover">
          <source autoPlay  muted loop src="/Futuristic interface  HUD sound effects.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      <div className=" w-[80%] h-[90%] grid  grid-col-[1fr] lg:grid-cols-[1fr]  z-3 absolute">
          
<div className='flex justify-center item-center'>
          <ScreenCode></ScreenCode>
</div>

     
            
        
        </div>
    </div>



  );
}

export default App;
