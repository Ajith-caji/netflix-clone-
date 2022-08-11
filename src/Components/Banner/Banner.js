import React, {useEffect,useState} from 'react'
import axios from  '../../constants/axios'
import {API_KEY,imageURL} from '../../constants/Constants'
import './Banner.css'
function Banner() {
        const [movie, setMovie] =useState()
        useEffect(() => {
            axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
                console.log(response.data.results)
                setMovie(response.data.results[10])
            })
        }, [])

    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path :""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
