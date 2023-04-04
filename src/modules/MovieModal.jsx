import React, { useRef, useEffect } from 'react'
import { MdClose } from 'react-icons/md'

const MovieModal = ({ movie, closeModal }) => {

    // save modal window reference
    const modalWindow = useRef()

    // close modal if user clicks outside modal window
    const handleClicks = (ev) => {
        if (!modalWindow.current.contains(ev.target)) {
            closeModal()
        }
    }

    // watching mouseclicks for modal closing
    useEffect(() => {
        document.addEventListener('mousedown', handleClicks)
        return () => {
            document.removeEventListener('mousedown', handleClicks)
        }
    })


    return (
        <div className='flex items-center justify-center fixed z-50 w-full h-full bg-dark/80 top-0 left-0'>
            <div
                ref={modalWindow}
                className="relative z-50 modal bg-dark-800 overflow-hidden rounded-lg drop-shadow-xl w-8/12"
            >
                <button
                    className='absolute z-10 right-4 top-4 button button-icon bg-secondary'
                    onClick={closeModal}
                >
                    <MdClose />
                </button>

                <div className='flex items-center'>
                    <div className='bg-dark'>
                        <img
                            className='h-full w-full'
                            src={`${movie.Poster}`} alt="" />
                    </div>
                    <div className='w-2/3 p-8'>
                        <h4>{movie.Title}</h4>
                        <p>{movie.Year}</p>
                        <p>{movie.Director}</p>
                        <p className='text-sm'>{movie.Plot}</p>
                        <p><a href={`https://imdb.com/title/${movie.imdbID}`}>IMDB page</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal