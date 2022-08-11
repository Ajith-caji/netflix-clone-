import React ,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from  '../../constants/axios'
import {imageURL,API_KEY} from '../../constants/Constants'
import Youtube from 'react-youtube'


function RowPost(props) {
    const [movies, setMovies] =useState([])
    const [urlId,setId] =useState('')
    useEffect(() => {
        axios.get(props.url).then((response) =>{
            console.log(response.data.results)
            setMovies(response.data.results)
        }).catch(err=>{
            alert('network error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if (response.data.results.length!==0){
        setId(response.data.results[0])
    }else{
        console.log("video not available")
    }
    })

  }
 
    return (
        
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>

                <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageURL+obj.backdrop_path}`} />
                
                )}
               
            </div>
           { urlId  && <Youtube opts={opts} videoId={urlId.key}/>}
        </div>
    
    )
}

export default RowPost
