import Head from 'next/head';
import React, { useEffect } from 'react';


const ProjectsSwipper = () => {


    const Card = ({ img ,Demolink ,title}) => (
        <div class="w-100 h-80 bg-gray-50 pl-[5%] pr-[5%]  flex flex-col gap-1 ">
            <div class="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100">
                <img className="w-[100%] h-[100%]" src={`${img}`}></img>

            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <span class="text-xl font-bold">{title} </span>
                    </div>
                </div>
                <a href={`${Demolink}`} className='border-2 border-black w-[100%]'>
                <button class="w-[100%] hover:bg-sky-700 text-gray-50 bg-sky-800 py-2" >Demo Link</button>
                </a>
            </div>
        </div>
    )
    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,

            },

        });
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <style>
                    {`
                                
                .swiper {
                padding-top: 50px;
                padding-bottom: 50px;
                background-color: white;
                }

                .swiper-slide {
                background-position: center;
                background-size: cover;
                width: 300px;
                height: 300px;
                background-color: white;
                }

                .swiper-slide img {
                display: block;
                background-color: white;
                
                }
            `}
                </style>
            </Head>
            <div class="swiper rounded-[45px] w-[90vw] lg:w-[70vw] mySwiper flex flex-cols ">

                <div class="swiper-wrapper ">
                    <div class="swiper-slide flex justify-center items-center ">
                        <Card title={'Ecommerce SocialHub'} img={'/screenshot_ecommerce.jpg'} Demolink={'https://fe-ecommerce-eight.vercel.app/'}></Card>
                    </div>
                    <div class="swiper-slide ">
                        <Card title={'SocialHub MainPage'}  img={'/screenshot_socialhub.jpg'} Demolink={'https://social-hub-ui.vercel.app/'}></Card>
                    </div>
                    <div class="swiper-slide ">
                        <Card title={'Robotik'} img={'/robotik.png'} Demolink={'http://robotikeg.com'}></Card>
                    </div>
                    <div class="swiper-slide ">
                        <Card title={'Augmntx Page'} img={'/augmentx.jpg'} Demolink={'https://augmntxpages.vercel.app/'}></Card>
                    </div>
                    <div class="swiper-slide ">
                        <Card title={'Restaurant Page'}  img={'/rest.jpg'} Demolink={'https://online-resturant-program.vercel.app/'}></Card>
                    </div>
                    <div class="swiper-slide ">
                        <Card title={'Pharmaclone App'}  img={'/pharmaclone.jpg'} Demolink={'https://play.google.com/store/apps/details?id=com.pharmaclonetrailer&hl=en_US'}></Card>
                    </div>
                 

                </div>
                <div class="swiper-pagination bg-white"></div>

            </div>
        </>

    );
};

export default ProjectsSwipper;