import './Projects.css'

const callouts = [
    {
      name: 'the boy who coded',
      description: 'A 2d game based on the Harry Potter movie saga',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
      technologies: [
        {
          imgAlt: 'HTML',
          imgSrc: '/html.png'
        },
        {
          imgAlt: 'CSS',
          imgSrc: '/css-3.png'
        },
        {
          imgAlt: 'Javascript',
          imgSrc: '/js.png'
        }        
      ]
    },
    
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
      technologies: [{
              imgAlt: 'HTML',
              imgSrc: '/html.png'
            },
            {
              imgAlt: 'CSS',
              imgSrc: '/css-3.png'
            },
            {
              imgAlt: 'Javascript',
              imgSrc: '/js.png'
            },
            {
              imgAlt: 'Bootstrap',
              imgSrc: '/bootstrap.png'
            },
            {
              imgAlt: 'mongodb',
              imgSrc: '/mongodb.png'
            },
            {
              imgAlt: 'Handlebars',
              imgSrc: '/handlebar.png'
            },
            {
              imgAlt: 'node',
              imgSrc: '/node-js.png'
            }
          ]
    },

    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
      technologies: [{
        imgAlt: 'HTML',
        imgSrc: '/html.png'
      },
      {
        imgAlt: 'CSS',
        imgSrc: '/css-3.png'
      },
      {
        imgAlt: 'Javascript',
        imgSrc: '/js.png'
      },
      {
        imgAlt: 'React',
        imgSrc: '/physics.png'
      },
      {
        imgAlt: 'node',
        imgSrc: '/node-js.png'
      },      
      {
        imgAlt: 'MaterialUI',
        imgSrc: '/materialui.png'
      },
      {
        imgAlt: 'mongodb',
        imgSrc: '/mongodb.png'
      },
      {
        imgAlt: 'socketio',
        imgSrc: '/socket.png'
      },
      {
        imgAlt: 'heroku',
        imgSrc: '/heroku.png'
      }
    ]
    }
  ]


  
  export default function Projects() {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Projects</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout, i) => (
                <div key={callout.name} className="group relative" id="hovering" >
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1" id="img" >
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
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
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.description}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  