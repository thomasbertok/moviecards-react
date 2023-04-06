import React from "react"

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
            <div className="card-body">
                <h4 className="font-medium leading-none">{Title}</h4>
                <p>{Genre}</p>
                <p>{Year}</p>
                <p><strong>Director:</strong><br />{Director}</p>
                <p><strong>Actors:</strong><br />{Actors}</p>
            </div>
        </div>
    )
}

export default MovieCard