import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

export default function MovieCard({ movie, onclick }) {
    console.log(movie);
    return (
        <div className="moviecardlist">
            <div className="moviecard">
                <Link className="movielink" to={`/film/${movie.id}`}>
                    <div className="movieinfo">
                        {movie.imDbRating && (
                            <div class="positioning">
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
                        <img
                            className="movieimg"
                            src={movie?.image}
                            alt="..."
                        />
                    </div>
                    <h6 style={{ color: 'white', textDecoration: 'none' }}>
                        {movie.title}
                    </h6>
                </Link>
            </div>
        </div>
    );
}
