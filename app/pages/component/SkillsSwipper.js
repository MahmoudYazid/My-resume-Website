import Head from 'next/head';
import React, { useEffect } from 'react';


const SwiperComponent = () => {


    const Card = ({img}) => (
        <div className='flex justify-center items-center flex-col min-h-[100%] lg:min-w-[30rem] '>
            <img className='w-[50%] h-[50%] bg-white' src={`${img}`}></img>
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
        <div class="swiper rounded-[45px] w-[90vw] lg:w-[70vw] mySwiper flex flex-cols justify-center items-center gap-5">
            
            <div class="swiper-wrapper">
                    <div class="swiper-slide justify-center items-center ">
                    <Card  img={'/next-icon.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/html-icon.svg'}></Card>
                </div>

                <div class="swiper-slide">
                    <Card img={'/react-icon.svg'}></Card>
                </div>

                <div class="swiper-slide">
                    <Card img={'/css-3.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/js.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/node.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/redux.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/angular.svg'}></Card>
                </div>
                <div class="swiper-slide">
                    <Card img={'/tailwind.svg'}></Card>
                </div>


            </div>
            <div class="swiper-pagination bg-white"></div>
           
        </div>
        </>

    );
};

export default SwiperComponent;