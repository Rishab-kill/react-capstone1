/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function MovieRow({ genre }){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en&with_genres=${genre}';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWQ1YzRlZjE1NTM3ZTdiZTNiZGViZjBlMjdmZmIxMCIsInN1YiI6IjY1ZWYzMGYwYzJiOWRmMDE4NDVkNDcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ffEEmSuxOgDJTplOeTtUloZC8kqH-XUT6biJGyDT1Z4'
            }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovies(json.results))
        .catch(err => console.error('error:' + err));
    },[]);
    console.log("movie is",movies)
    return (
        <div>
            <p
                style={{
                    fontSize:"32px",
                    fontWeight:"bold",
                }}
            >
                {genre.name}</p>
            <div
                style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                }}
            >
                {movies.map((movies, index) => {
                    return index > 4 ? (
                        <></>
                    ) :(
                        <div 
                            key={index}
                            style={{
                                display:"flex",
                            }}
                        >
                           <div>
                                <img style={{objectFit:"cover"}}
                                    src={'https://image.tmdb.org/t/p/w500${movies.poster_path}'}
                                    alt={movies.title}
                                />
                           </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}