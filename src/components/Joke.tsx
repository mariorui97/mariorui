import axios from 'axios';
import { useEffect, useState } from 'react';
import {Element} from 'react-scroll'

function Joke(){
    
    const [joke, setJoke] = useState()

    useEffect(() => {
        function getData(){
            const data = axios.get('https://api.jokes.one/jod')
            .then((res)=>{
                setJoke(res.data.contents.jokes[0].joke.text)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        getData();
    }, []);

    
    return(
        <div className="max-w-screen px-1 py-1 lg:mx-32 mx-4 mb-24 md:px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-[#F3F4F6] p-8" > 
                <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
                        Daily Joke
                </h2>
                <Element id='joke' name='joke'></Element>
                <div className="max-w-screen-md mx-auto font-semibold text-center text-xl md:text-lg">      
                    {joke} 
                </div>
            </div>
        </div>
    )
}

export default Joke