import React from 'react'
import './Animals.css'
function Animals() {
    return (
<div className="max-w-screen-xl px-4 py-24 mx-auto md:px-8 bg-gray-100" id="animals">
  <div className="mb-10 md:mb-16">
    <h2
      className="
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      "
    >
      My Pets
    </h2>

    <p data-tooltip-target="tooltip-default" className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">      
      To be honest, they are not pets - they are family. I grew with them and I'll make sure they grow with me. 
    </p>
{/*       <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
      Tooltip content
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div> */}
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="p-4 shadow">
      <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
          alt="Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-indigo-500 md:text-lg">Oscar</div>
        <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Pinscher / Does what he pleases
        </p>

        <div className="flex">
          <div className="flex gap-4">
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 shadow">
      <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt="Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-indigo-500 md:text-lg">John Doe</div>
        <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Web Developer
        </p>

        <div className="flex">
          <div className="flex gap-4">
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 shadow">
      <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg"
          alt="Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-indigo-500 md:text-lg">Scarlet</div>
        <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Devops Engineer
        </p>

        <div className="flex">
          <div className="flex gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis voluptas quasi sunt consequuntur quisquam. Sunt incidunt dolorum asperiores fugiat sint esse odio eius. Perspiciatis dolorem animi a debitis facere.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Animals
