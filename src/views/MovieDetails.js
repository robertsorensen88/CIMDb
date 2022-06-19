import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api/client';
import { AiFillClockCircle, AiFillStar, AiFillCalendar } from 'react-icons/ai';

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        client.getInfo('/title/', movieId).then(({ data }) => {
            setMovie(data);
            setLoading(false);
        });
    }, [loading, movieId]);
    console.log(movie);
    if (loading)
        return (
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        );
    return (
        <div
            className="container"
            style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'rgb(28, 28, 28)',
            }}
        >
            <h2 style={{ paddingTop: '3rem' }}>{movie.title}</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    gap: '5rem',
                }}
            >
                <div
                    style={{
                        width: '20rem',
                        height: '25rem',
                    }}
                >
                    <img
                        style={{
                            width: '100%',
                            height: '100% ',
                            borderRadius: '8px',
                        }}
                        src={movie.image}
                        alt="..."
                    />
                </div>
                <div
                    className="content"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '50%',
                        maxWidth: '50%',
                        gap: '0.5rem',
                        textAlign: 'left',
                    }}
                >
                    <div style={{ height: '75%' }}>
                        <p>{movie.plot}</p>
                    </div>
                    <div>{movie.genres}</div>
                    {movie.runtimeStr && (
                        <div>
                            <AiFillClockCircle
                                style={{
                                    marginBottom: '-2px',
                                    marginRight: '3px',
                                }}
                            />
                            {movie.runtimeStr}
                        </div>
                    )}
                    {movie.imDbRating && (
                        <div>
                            <AiFillStar
                                style={{
                                    color: 'yellow',
                                    marginBottom: '-2px',
                                    marginRight: '3px',
                                }}
                            />
                            {movie.imDbRating}
                        </div>
                    )}
                    {movie.releaseDate && (
                        <div>
                            <AiFillCalendar
                                style={{
                                    marginBottom: '-2px',
                                    marginRight: '3px',
                                }}
                            />
                            {movie.releaseDate}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
