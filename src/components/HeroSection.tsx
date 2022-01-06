import React from 'react'
import Socials from './Socials'

function HeroSection() {
    return (
        <div className="antialiased" x-data="{ isOpen : false}">
 <div className="hero bg-gray-100 py-16">

        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">

            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="hero-text col-span-6">
                    <h1 className=" font-medium text-3xl md:text-5xl max-w-xl text-gray-900 leading-tight">Hey, It's me Mário</h1>
                    <h1 className=" font-semibold text-4xl mt-3 md:text-7xl max-w-xl text-gray-900 leading-tight">I'm a Full-Stack</h1>
                    <h1 className=" font-bold text-5xl mt-3 md:text-7xl max-w-xl text-gray-900 leading-tight">Web Developer</h1>
                    <hr className=" max-w h-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-8"/>
                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Apart from the Super Mário reference I'm in love coding, and not with Princess Peach.</p>
                    <p className="text-gray-800 text-base leading-relaxed mt-1 font-semibold">Born and raised in Portugal - forged to succeed in the coding world.</p>
                    <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                        <Socials/>
                    </div>
                </div>
 
                <div className="hero-image col-span-6">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <defs>
                        <clipPath id="shape">
                        <path id="blob" d="M472.5,284.5Q464,319,437,342.5Q410,366,402,407Q394,448,356,454Q318,460,284,450Q250,440,222.5,429.5Q195,419,155,427.5Q115,436,103,400.5Q91,365,85.5,335Q80,305,65,277.5Q50,250,36,213Q22,176,44,146Q66,116,103.5,108Q141,100,159.5,64Q178,28,214,21.5Q250,15,278.5,45.5Q307,76,350,64.5Q393,53,406.5,89.5Q420,126,451.5,150Q483,174,482,212Q481,250,472.5,284.5Z" fill="none" strokeWidth="7px" stroke="#d1d8e0"></path>
                        </clipPath>
                    </defs>
                    <image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" xlinkHref="https://serving.photos.photobox.com/7937509671ce2aa2919ef450f102f2d75feeaf9d8aa57dd6ab50bb84e8ceda9c05e22455.jpg" preserveAspectRatio="none"></image>
                    </svg>
                </div>
            </div>
        </div>
    </div>
            
        </div>
    )
}

export default HeroSection
