import React from "react"
import { HiDotsHorizontal } from 'react-icons/hi'

const MovieCard = (props) => {
    const { Title, Poster, Year, Actors, Director, Genre, imdbID } = props.movie
    let moviePoster = Poster

    // default the poster image
    if (Poster === 'N/A') moviePoster = 'https://placehold.it/198x264&text=Image+Not+Found'

    return (
        <div
            className="card rounded-md overflow-hidden relative w-full h-full"
            style={{ backgroundImage: `url(${moviePoster})` }}
            onClick={() => { props.showDetails(props.movie) }}
        >
            <div className="card-body relative">
                <h4 className="text-sm lg:text-md font-medium leading-none">{Title}</h4>
                <p>{Genre}</p>
                <p>{Year}</p>
                <p><strong className="text-light-700 font-bold">Director:</strong><br />{Director}</p>
                <p><strong className="text-light-700 font-bold">Actors:</strong><br />{Actors}</p>

                <button className="absolute button button-icon bottom-3 right-3 bg-transparent">
                    <HiDotsHorizontal size="24px" />
                </button>

            </div>
        </div >
    )
}

export default MovieCard