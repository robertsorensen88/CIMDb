import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api/client';

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
                backgroundColor: 'gold',
            }}
        >
            <div>
                <img src={movie.image} alt="..." />
            </div>
        </div>
    );
}
