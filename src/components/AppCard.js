import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function AppCard({ movie, height = '400px', width = '23rem' }) {
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        history.replace({
            pathname: `/details/${movie.id}`,
            state: { data: movie }
        })
    }

    return (
        <>
            <Card style={{ width, margin: '5px' }}>
                <a href={`#details`} onClick={handleClick}><Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} height={height} /></a>
            </Card>
        </>
    )
}
