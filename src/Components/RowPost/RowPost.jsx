import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import { imageURL,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,SetUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url)
        .then(response=>{
            setMovies(response.data.results)
            console.log(response);
        })
        .catch(error=> console.log( error))

    },[])
    const opts= {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
        console.log(response,'response');
        if(response.data.results.length!==0){
            SetUrlId(response.data.results[0])
        }else{
            console.log(
                'Array empty'
            );
        }
    } ).catch(err=>console.log(err))
    
  }
    return (
        <div className='text-white'>
            <h2 className='font-bold text-lg capitalize'>{props.title}</h2>
            <div className="posters cursor-pointer flex p-5 overflow-x-scroll overflow-y-hidden">
                {movies.map((movie,index)=>{

                   return(
                      
                       <img onClick={()=>handleMovie(movie.id)} key={index} className={props.isSmall ? 'row-poster-small' : 'row-poster'} src={movies ? imageURL+movie.backdrop_path : ''} alt="" />

                       ) 
                }
                    
                )}
            </div>
           {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost
