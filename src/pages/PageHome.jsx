import React, { useEffect, useState, useContext } from 'react'
import Header from '../components/Header'
import MoviesList from '../modules/MoviesList'
import MovieModal from '../modules/MovieModal'
import AuthContext from '../modules/AuthContext'
import { database } from '../firebase'
import { onValue, ref, child, get, getDatabase } from 'firebase/database'
import LoadingIcons from 'react-loading-icons'

// get the data from firebase
const getMovies = async (uid) => {
    const query = ref(database, uid)
    onValue(query, (snapshot) => {
        // if there is a result
        if (snapshot.exists()) {
            // the result has a value, is not null
            const result = snapshot.val()
            // console.log('>>> movies obj: ', result.movies)
            // convert the object to array
            const moviesArray = Object.values(result.movies)
            // set state of movies
            return moviesArray
            //console.log('>>> MOVIES: ', movies)
        } else {
            // no result
            console.error('!!! No snapshot')
            return null
        }

        // turn off loading state
        // setLoading(false)
    })
}

// fetch the data
const useFetch = (uid, defaultData) => {
    const [data, setData] = useState(defaultData)

    useEffect(() => {
        const moviz = getMovies(uid)
        setData(moviz)
    }, [uid])

    // return state (the movies array)
    return data
}

const PageHome = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const [movieModalData, setMovieModalData] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const user = useContext(AuthContext)
    const userId = user.user.uid

    useEffect(() => {
        setLoading(true)

        const query = ref(database, userId)

        return onValue(query, (snapshot) => {

            // if there is a result
            if (snapshot.exists()) {

                setLoading(false)

                // the result has a value, is not null
                const result = snapshot.val()

                console.log('>>> movies obj: ', result.movies)

                // convert the object to array
                const moviesArray = Object.values(result.movies)

                // set state of movies
                setMovies(moviesArray)

                //console.log('>>> MOVIES: ', movies)

            } else {
                console.error('!!! No snapshot')
                setLoading(false)
            }
        })
    }, [userId])

    const closeModal = () => {
        setModalVisible(false)
        setMovieModalData({})
    }

    const showModal = (movie) => {
        setMovieModalData(movie)
        setModalVisible(true)
    }

    return (
        <div className={'root static z-0 ' + (modalVisible ? 'modal-visible' : '')}>
            <Header />
            <main className="main-container min-h-full p-8 z-0">
                <div className={"page page-home min-h-full" + (loading ? " page-loading" : "")}>
                    {loading &&
                        <div className="flex items-center justify-center p-8">
                            <LoadingIcons.Oval strokeWidth={4} height={'4em'} width={'4em'} />
                        </div>
                    }
                    {!loading && movies && movies.length === 0 &&
                        <div className="flex items-center justify-center p-8">
                            No movies in the database.
                        </div>
                    }
                    {!loading && movies.length > 0 &&
                        < MoviesList movies={movies} showDetails={showModal} />
                    }
                </div>
            </main>

            {modalVisible &&
                <MovieModal movie={movieModalData} closeModal={closeModal} />
            }
        </div>

    );
}

export default PageHome;            