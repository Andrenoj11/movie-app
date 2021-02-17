import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"

import AppCard from '../components/AppCard'



export default function Home() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMovies = async () => {
        setPage(page + 1)
        try {
            const { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
                // url: `https://api.themoviedb.org/3/movie/now_playing?api_key=06fbe0b62d2503d4fcaecff7ab9512f5&language=en-US&page=${page}`
            })
            if (!data) return null
            if (data.page > data.total_pages) return setHasMore(false)

            return setMovies(movies.concat(data.results))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container' style={{ marginTop: '100px' }}>
                <h1 className='text-center'>Movies List</h1>
                <div className='row' style={{ justifyContent: 'flex-start' }}>
                    <InfiniteScroll
                        dataLength={movies.length}
                        next={fetchMovies}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        className='row'
                    >
                        {
                            movies.map((movie, index) =>
                                <AppCard key={index} movie={movie} />
                            )
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}
