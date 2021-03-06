import React, { Fragment, Component } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="./icon.png"
                    alt="random"
                  />
                  <img
                    className="hidden lg:block h-48 w-auto"
                    src="./iconw2.png"
                    alt="random"
                  />
                </div>
                    
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <ScrollLink 
                      to="projects" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Projects
                    </ScrollLink>  
                    <ScrollLink 
                      to="animals" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Animals
                    </ScrollLink>  
                    <ScrollLink 
                      to="joke" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Daily Joke
                    </ScrollLink>    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  key='Projects'
                  as="a"
                  className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={undefined}  
                >
                    <ScrollLink 
                      to="projects" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Projects
                    </ScrollLink>
                </Disclosure.Button>
                <Disclosure.Button
                  key='Animals'
                  as="a"
                  className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={undefined}  
                >
                    <ScrollLink 
                      to="animals" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Animals
                    </ScrollLink>
                </Disclosure.Button>
                <Disclosure.Button
                  key='Joke'
                  as="a"
                  className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={undefined}  
                >
                    <ScrollLink 
                      to="joke" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Daily Jokes
                    </ScrollLink>
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
