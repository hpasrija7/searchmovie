import React , {useState} from 'react';
import './searchmovie.css';

export default function Searchmovie() {


    const [query,setQuery] = useState('');

    const [movies , setMovies]=useState([]);

    const searchMovies= async (e)=>{
        e.preventDefault();
        console.log("submitting");
        const url =`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
        setMovies(data.results);
        

    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

        
                    </div>
                ))}
            </div>        
        </div>
    )
}
