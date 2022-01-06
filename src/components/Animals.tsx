import React from 'react'
import './Animals.css'
import '@themesberg/flowbite';

function Animals() {
    return (
<div className="max-w-screen-xl px-4 py-24 mx-auto md:px-8" >
  <div className="mb-10 md:mb-16" >
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

    <div className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">      
      To be honest, they are not pets - they are 
      <p className="relative inline-block font-bold ml-1 items-center group" id="toretto">
       family 
      <div className="absolute bottom-0 inline-block flex-col items-center hidden mb-6 group-hover:flex">
			  <span className="relative z-10 p-2 text-xs leading-none min-w-max text-white whitespace-no-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">Toretto (?)</span>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-purple-500"></div>
		</div>
	</p>
  . I grew with them and I'll make sure they grow with me. 
    </div>
    
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="p-4 shadow-lg hover:shadow-indigo-500/50">
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
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./pinscher.png"/>
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./zzz.png"/>
            
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./bone.png"/>
          </div>
        </div>
      </div>
      <p className='mt-5'>Oscar likes food and sleep. He barks to everyone but as we know 'Barking dogs never bite'</p>
    </div>
    <div className="p-4 shadow-lg hover:shadow-indigo-500/50">
      <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt="Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-indigo-500 md:text-lg">Ritinha</div>
        <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          The Ferret
        </p>

        <div className="flex">
          <div className="flex gap-4">
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./ferret.png"/>
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./teeth.png"/>
            
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./dog-food.png"/>
          </div>
        </div>
      </div>
      <p className='mt-5'>Ritinha bites everyone and everything. She can't hold her will to play with her teeth.</p>
    </div>
    
    <div className="p-4 shadow-lg hover:shadow-indigo-500/50">
      <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg"
          alt="Image"
          className="object-cover object-center w-full h-full"
          />
        </div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-indigo-500 md:text-lg">Nagini</div>
        <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Corn Snake
        </p>

        <div className="flex">
          <div className="flex gap-4">
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./slytherin.png"/>
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./corn.png"/>
            
            <img
                className="w-6 h-6 text-blue-600 fill-current" src="./mouse.png"/>
          </div>
        </div>
      </div>
      <p className='mt-5'>Even though she's a corn snake - her taste is for mices. She loves giving kisses.</p>
    </div>
  </div>
</div>
    )
}

export default Animals
