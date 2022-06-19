import { useEffect, useState } from 'react';
import client from '../api/client';
import MovieCard from '../components/MovieCard';

export function Home() {
    // const [comingSoon, setComingSoon] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(20);
    useEffect(() => {
        if (loading) {
            // client.get(`/ComingSoon/`).then(({ data }) => {
            //     setComingSoon(data.items);
            // });
            client.get('/mostpopularmovies/').then(({ data }) => {
                setMostPopular(data.items);
            });
        }
    }, [loading]);

    useEffect(() => {
        if (mostPopular?.length > 0) setLoading(false);
    }, [mostPopular]);
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    function handleMore() {
        setCounter(counter + 20);
    }
    return (
        <div className="homediv">
            {/* <div
                className="comingsoondiv"
                style={{
                    borderTop: 'solid 1px gray',
                    borderBottom: 'solid 1px gray',
                    paddingBottom: '50px',
                }}
            >
                <h3
                    style={{
                        color: 'whitesmoke',
                        textAlign: 'left',
                        paddingLeft: '30px',
                        marginBottom: '0px',
                        paddingBottom: '5px',
                    }}
                >
                    Coming soon
                </h3>
                <div className="comingsoonmovies">
                    {comingSoon &&
                        comingSoon.length > 0 &&
                        comingSoon.map((comingSoonMovies, i) => (
                            <div
                                style={
                                    i + 1 < comingSoon.length
                                        ? { marginRight: '2.5rem' }
                                        : {}
                                }
                            >
                                <MovieCard movie={comingSoonMovies} />
                            </div>
                        ))}
                </div>
            </div> */}
            <div
                className="comingsoondiv"
                style={{
                    borderTop: 'solid 1px gray',
                    borderBottom: 'solid 1px gray',
                    paddingBottom: '50px',
                }}
            >
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <h2
                        style={{
                            color: 'whitesmoke',
                            textAlign: 'left',
                            paddingLeft: '12rem',
                            marginBottom: '0px',
                            paddingBottom: '5px',
                        }}
                    >
                        C IMDb
                    </h2>
                    <div
                        style={{
                            paddingRight: '12rem',
                        }}
                    >
                        {/* <select
                            name="cars"
                            id="cars"
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                cursor: 'pointer',
                                border: 'none',
                                fontWeight: 'bold',
                                marginRight: '5px',
                            }}
                        >
                            <option value="25">20</option>
                            <option value="50">40</option>
                            <option value="75">80</option>
                            <option value="100">100</option>
                        </select> */}
                        <h5>
                            {counter} of {mostPopular.length}
                        </h5>
                    </div>
                </div>
                <div className="comingsoonmovies">
                    {mostPopular &&
                        mostPopular.length > 0 &&
                        mostPopular
                            .slice(0, counter)
                            .map((comingSoonMovies, i) => (
                                <div
                                    style={
                                        i + 1 < mostPopular.length
                                            ? {
                                                  gap: '5',
                                              }
                                            : {}
                                    }
                                >
                                    <MovieCard movie={comingSoonMovies} />
                                </div>
                            ))}
                </div>

                <h5 style={{ marginTop: '3rem' }}>
                    {counter} of {mostPopular.length}
                </h5>
                {counter < 100 && (
                    <button
                        style={{
                            marginTop: '1rem',
                            padding: '1.5rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleMore()}
                    >
                        Show more...
                    </button>
                )}
            </div>
        </div>
    );
}
