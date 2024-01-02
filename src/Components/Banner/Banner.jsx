import React, { useEffect,useState }from 'react'
import { API_KEY,imageURL } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie,setMovie] = useState({})
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then(response=>{
            console.log(response.data.results);
            const index = Math. trunc(Math. random()*20);
            console.log(index)
            setMovie(response.data.results[index])
            console.log(imageURL,'image URL');
            
        }) 
    },[])
  return (
    <div className='banner relative text-white'>
        <img style={{height:"500px"}} className='w-full' src={movie ? imageURL+movie.backdrop_path : ""} alt="trending_image" />
        <div className="content absolute top-44 pl-2 ">
            <h1 className="title text-5xl font-nsans-bold pb-1.5">{movie.original_name ? movie.original_name :movie.original_title}</h1>
            <div className="banner-buttons ">
                <button className="button btn--banner btn-hover bg-light-gray ">Play</button>
                <button className="button btn--banner btn-hover bg-light-gray" >My List</button>
            </div>
            <p className="w-60 leading-5 pt-1 line-clamp-5 font-nsans-medium">{movie.overview} </p>
        </div>
        <div className="fade_bottom h-2 bg-gradient-to-b">

        </div>
    </div>
  )
}

export default Banner
