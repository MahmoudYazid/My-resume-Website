import '../App.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FcOpenedFolder } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";

function Cmd() {
    const InputRef = useRef('')
    const Container = useRef()
    const Nav = useNavigate()
    const [visibility, Setvisibility] = useState('hidden')
    const ChangeVisibiliy = () => {
        visibility == 'hidden' ? Setvisibility('flex') : Setvisibility('hidden')
    }

    const ShowCv = () => {

        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Open Database .....</div>'
            + '<div>Search For Cv .....</div>' +
            '<div class="underline  text-[1.5rem]">Show The File ...... </div>' +
            '<a href="/img/Mahmoud Abuelyazid cv.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open Cv</div></a>'

    }

    const ShowCertificate = () => {

        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Open Database .....</div>'
            + '<div>Search For certificate .....</div>' +
            '<div class="underline  text-[1.5rem]">Show The File ...... </div>' +
            '<a href="/img/A1 CERTIFICATE.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  germany A1 level Certificate</div></a>' +
            '<a href="/img/frontend.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Frontend Certificate</div></a>' +

            '<a href="/img/ielts certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Ielts Certificate</div></a>' +
            '<a href="/img/code academy ui  ux.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  ui/ux  Certificate</div></a>' +
            '<a href="/img/pharmacy certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  pharmacy Ba Certificate</div></a>'

    }
    const contactFunc = () => {

        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Open Database .....</div>'
            + '<div>Search For contact .....</div>' +
            '<div class="text-bold hover:cursor-pointer hover:underline">this is mahmoud`s Gmail abuelyazi.software@gmail.com</div>' +

            '<a href="https://www.facebook.com/Dr.MahmoudYazid/"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Mahmoud`s Fcebook</div></a>' +
            '<a href="https://www.linkedin.com/in/mahmoudyazid/"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Mahmoud`s Linkedin </div></a>' +

            '<div class="text-bold hover:cursor-pointer hover:underline">this is Mahmoud`s Phone : 01005648558 </div>' +
            '<a href="https://www.upwork.com/freelancers/mahmoudy6"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Mahmoud`s upwork </div></a>' +
            '<a href="https://www.freelancer.com/u/MahmoudabuYazid"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Mahmoud`s freelancer Account</div></a>'

    }
    const Exp = () => {
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
    const PastProjextsFunc = () => {
        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Past Projects Of Mahmoud .... </div>' +
            '<div class="  text-[1.5rem] ">*internship Made Projects (Frontend)</div>' +
            '<div> SocialHub Web-Page [<a href="https://github.com/MahmoudYazid/SocialHub-Ui" class="hover:underline">GitHub Link</a> - <a class="hover:underline" href="https://social-hub-ui.vercel.app/">Website Link</a> ]:  -> tech Uses : [React - next - tailwind  ]</div>' +
            '<div> Augmentx Web-Page [<a class="hover:underline" href="https://github.com/MahmoudYazid/augmntxpages">GitHub Link</a> - <a class="hover:underline" href="https://augmntxpages.vercel.app/">Website Link</a> ]:  -> tech Uses : [React  - tailwind  ]</div>' +

            '<div class="  text-[1.5rem] ">*Freelance Made Projects (end to end)</div>' +
            '<div> E-commerce Customized App For PHARAOH SEVONIERS RETAIL [<a class="hover:underline" href="https://github.com/MahmoudYazid/KingTUt">GitHub Link</a>  ]:  -> tech Uses : [React - next - tailwind  ]</div>' +
            '<div> E-commerce Customized App For Real state [<a href="https://github.com/MahmoudYazid/real_state_e_commerce" class="hover:underline">GitHub Link</a>  ]:  -> tech Uses : [React - next - tailwind  ]</div>' +

            '<div class="  text-[1.5rem] ">*Self Made Projects  </div>' +
            '<div>pharmaclone in google play [<a href="https://github.com/MahmoudYazid/pharmaclone-limited" class="hover:underline">GitHub Link</a> -<a class="hover:underline" href="https://play.google.com/store/apps/details?id=com.pharmaclonetrailer"> Google Play Link</a> ] ->  Pharmacy Management App - tech Uses :[React Native]  </div>' +
            '<div>Restauant Online System End-to-End (NextJs) [ <a href="https://github.com/MahmoudYazid/online-resturant-program"  class="hover:underline">GitHub Link</a> - <a class="hover:underline" href="https://online-resturant-program.vercel.app/" >Demo Link</a>  ] ->  tech Uses : [React - next - tailwind  ]</div>' +
            '<div>Doctor Booking appointment App (end to end) (nextjs) [<a href="https://github.com/MahmoudYazid/BookingWebsite" class="hover:underline"> GitHub Link </a>- <a class="hover:underline" href="https://booking-website-iota.vercel.app/"> Demo Link </a>]:  -> tech Uses : [React - next - tailwind  ]</div>' +
            '<div>Whats-App Clone [<a href="https://github.com/MahmoudYazid/WhatsApp-Cloning-Porject" class="hover:underline">GitHub Link </a>- <a href="https://whats-app-cloning-porject.vercel.app/" class="hover:underline"> Demo Link </a>]:  -> tech Uses : [React  - tailwind  ]</div>' +
            '<div>Instegram  Clone [<a href="https://github.com/MahmoudYazid/InstegramCloning" class="hover:underline">GitHub Link </a>- <a class="hover:underline" href="https://instegram-cloning.vercel.app/"> Demo Link </a>]:  -> tech Uses : [React  - tailwind  ]</div>'



    }

    const SkillsFunc = () => {
        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Open Database .....</div>'
            + '<div class="underline  text-[1.5rem]">My Skills</div>' +
            '<div>FrontEnd Skills -> React - Next - Typescript - JavaScript - redux - html - css - tailwind </div>' +
            '<div>Additional  Skills -> Node  - Express - MongoDb  </div>'

    }
    const info = () => {
        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div class="  text-[1.5rem] ">*this is the cv .... </div>' +
            '<a href="/img/Mahmoud Abuelyazid cv.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open Cv</div></a>'
            + '<div class="  text-[1.5rem] ">*My Experiences</div>' +
            '<div>InternShip in SocialHub </div>' +
            '<div>Freelancer At <a href="https://www.upwork.com/freelancers/mahmoudy6" class="hover:underline">(Click To Go) Upwork </a> And <a href="https://www.freelancer.com/u/MahmoudabuYazid" class="hover:underline">(Click To Go) FreeLance </a> </div>'

            + '<div class="  text-[1.5rem] ">*My Certificates</div>'

            + '<a href="/img/A1 CERTIFICATE.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  germany A1 level Certificate</div></a>' +
            '<a href="/img/frontend.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Frontend Certificate</div></a>' +

            '<a href="/img/ielts certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Ielts Certificate</div></a>' +
            '<a href="/img/code academy ui  ux.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  ui/ux  Certificate</div></a>' +
            '<a href="/img/pharmacy certificate.pdf"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  pharmacy Ba Certificate</div></a>'
            + '<div class="  text-[1.5rem] ">*Search For contact .....</div>' +
            '<div class="text-bold hover:cursor-pointer hover:underline">this is mahmoud`s Gmail abuelyazi.software@gmail.com</div>' +

            '<a href="https://www.facebook.com/Dr.MahmoudYazid/"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Mahmoud`s Fcebook</div></a>' +
            '<a href="https://www.linkedin.com/in/mahmoudyazid/"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to open  Mahmoud`s Linkedin </div></a>' +

            '<div class="text-bold hover:cursor-pointer hover:underline">this is Mahmoud`s Phone : 01005648558 </div>' +
            '<a href="https://www.upwork.com/freelancers/mahmoudy6"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Mahmoud`s upwork </div></a>' +
            '<a href="https://www.freelancer.com/u/MahmoudabuYazid"><div class="text-bold hover:cursor-pointer hover:underline">Click Here to  open  Mahmoud`s freelancer Account</div></a>'


    }

    const openGui = () => {
        const ContainerId = document.getElementById('newCodeContainer')
        ContainerId.innerHTML = '<div>Open Gui .... </div>'



    }
    const helpOrder = () => {

        const ContainerId = document.getElementById('newCodeContainer')

        ContainerId.innerHTML = '<div  >Write cv -> to open My Cv</div>' +
            '<div   >Write certificate -> to open My Certificates</div>' +
            '<div >Write exp -> to log My experiences</div>' +
            '<div >Write info -> to tell You everyThing</div>' +
            '<div >Write contact -> to tell You Mahmoud`s Contact info</div>' +
            '<div >Write projects -> to tell You Mahmoud`s pastProjects info</div>' +
            '<div >Write clear -> to clear the cmd</div>' +
            '<div >Write gui -> to open Graphic user InterFace</div>'

    }

    const onKeyPressAction = (event) => {
        if (event.key === "Enter") {
            switch (InputRef.current.value) {
                case "help":
                    helpOrder()
                    InputRef.current.value = ""

                    break;
                case "cv":
                    ShowCv()
                    InputRef.current.value = ""

                    break;
                case "certificate":
                    ShowCertificate()
                    InputRef.current.value = ""

                    break;
                case "exp":
                    Exp()
                    InputRef.current.value = ""

                    break;
                case "info":
                    info()
                    InputRef.current.value = ""

                    break;
                case "clear":
                    clear()
                    InputRef.current.value = ""

                    break;
                case "contact":
                    contactFunc()
                    InputRef.current.value = ""

                    break;
                case "projects":
                    PastProjextsFunc()
                    InputRef.current.value = ""

                    break;

                case "skills":
                    SkillsFunc()
                    InputRef.current.value = ""
                    break;
                case "gui":
                    Nav('/gui')

                    break;
                default:
                    wrongInput()
                    break;
            }
        }




    }
    const ScreenCode = () => (
        <div class="container">
            <div class="window" >
                <div class="window-title">
                    <p>Yazid Console </p>
                    <div class="window-buttons">
                        <div onClick={() => ChangeVisibiliy()} class="window-button fullscreen"></div>
                        <div onClick={() => ChangeVisibiliy()} class="window-button reduce"></div>
                        <div onClick={() => ChangeVisibiliy()} class="window-button close"></div>
                    </div>
                </div>
                <div class="console">
                    <pre><code>
                        Hello I am Mahmoud abuelyazid
                        <br></br>
                        I Am frontend Developer
                        <br></br>

                        I will give you the opportunity to hack My computer


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

    const Console=()=>(
        <div className={`${visibility} absolute w-[95%] h-[90%] flex items-center justify-center`}>
            <div className=" w-[80%] h-[90%] grid  grid-col-[1fr] lg:grid-cols-[1fr]  z-3 absolute">

                <div className='flex justify-center item-center'>
                    <ScreenCode></ScreenCode>
                </div>




            </div>
        </div>
    )
    return (

 
<>
<Console></Console>
<div onClick={()=>ChangeVisibiliy()}>
          <img src='/Hopstarter-Sleek-Xp-Software-Command-Prompt.256.png' alt='' className='w-[3rem] h-[3rem]'></img>
          </div>
        </>
    );
}

export default Cmd;
