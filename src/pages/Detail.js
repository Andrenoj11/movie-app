import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Image, Row, Col } from 'react-bootstrap'
import AppCard from '../components/AppCard'

export default function Detail() {
    const params = useParams()
    const location = useLocation()
    const [movie, setMovie] = useState({})
    const [similarMovies, setSimilarMovies] = useState([])
    const [year, setYear] = useState('')

    useEffect(() => {
        fetchMovieById()
        setMovie(location.state.data)
        setYear(location.state.data.release_date)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    const fetchMovieById = async () => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
            })
            if (!data) return null

            return setSimilarMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='container' style={{ marginTop: '100px' }}>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <Image width='300px' height='300px' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} rounded />
                    </Col>
                    <Col style={{ justifyItems: 'center', alignItems: 'center' }}>
                        <h1>{movie.title}</h1>
                        <h5>Release @{year.split('-')[0]}</h5>
                        <p>"{movie.overview}"</p>
                    </Col>
                </Row>
                <div style={{ marginTop: '100px' }}>
                    <h4 className='mb-3'>Similar Movies</h4>
                    <div className='row' style={{ justifyContent: 'flex-start' }}>
                        {
                            similarMovies.map((movie, index) =>
                                <AppCard key={index} movie={movie} height='300px' width='17.16rem' />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
