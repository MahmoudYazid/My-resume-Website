import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FcOpenedFolder } from 'react-icons/fc'
function App() {
  const InputRef=useRef('')
  const Container = useRef()
  useEffect(()=>{
    var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, 33);
  })
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
        <canvas className="bg-video absolute top-0 left-0 w-full h-full">
        
        </canvas>
      <div className=" w-[80%] h-[90%] grid  grid-col-[1fr] lg:grid-cols-[1fr]  z-3 absolute">
          
<div className='flex justify-center item-center'>
          <ScreenCode></ScreenCode>
</div>

     
            
        
        </div>
    </div>



  );
}

export default App;
