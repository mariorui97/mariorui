import './Projects.css'
import callouts from '../projects.json'
import { Element } from 'react-scroll'  
  export default function Projects() {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:mb-16 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <Element id='projects' name='projects'></Element>
            <h2 className="text-2xl font-extrabold text-gray-900">Projects</h2>
            
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout, i) => (
                <div key={callout.name} className="group relative" id="hovering" >
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1" id="img" >
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center"
                    />        
      
                  </div>  
                  <div className="hover-project">
                        <p>Technologies used:</p>
                        <div className="techs">
                        {callout.technologies.map((elem)=> (               
                          <img src={elem.imgSrc} alt={elem.imgAlt}/>                            
                        ))} 
                        </div>                                  
                                                                   
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} target="_blank" rel="noreferrer" >
                      <span className="absolute inset-0" />
                      {callout.description}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.name}</p>                  
                </div>
              ))}
              
            </div>
          </div>
          <div className="flex flex-col  items-center content-center justify-center justify-items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">And this portfolio, which was built in:</h2>
            <div className='flex flex-row items-center content-center justify-center justify-items-center'>
              <img className="mr-2" src="../physics.png" alt="react"/>
              <img className="mr-2" src="../typescript.png" alt="typescript"/>  
              <img className="mr-2" src="../tailwind.png" alt="tailwind"/>
              <img className="mr-2" src="../firebase.png" alt="firebase"/>
            </div>                    
          </div>
          
        </div>
      </div>
    )
  }
  