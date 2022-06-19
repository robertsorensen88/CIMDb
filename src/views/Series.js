import { useEffect, useState } from 'react';
import client from '../api/client';
import MovieCard from '../components/MovieCard';

export function Series() {
    const [topSeries, setTopSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(25);
    useEffect(() => {
        if (loading) {
            client.get(`/top250tvs/`).then(({ data }) => {
                setTopSeries(data.items);
            });
        }
    }, [loading]);

    useEffect(() => {
        if (topSeries?.length > 0) setLoading(false);
    }, [topSeries]);

    function handleMore() {
        setCounter(counter + 25);
    }

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }
    return (
        <div className="homediv">
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
                        Top 250 series
                    </h2>
                    <div
                        style={{
                            paddingRight: '12rem',
                        }}
                    >
                        <h5>
                            {counter} of {topSeries.length}
                        </h5>
                    </div>
                </div>
                <div className="popmovies">
                    {topSeries &&
                        topSeries.length > 0 &&
                        topSeries.slice(0, counter).map((popmovie, i) => (
                            <div
                                style={
                                    i + 1 < topSeries.length
                                        ? {
                                              gap: '5',
                                          }
                                        : {}
                                }
                            >
                                <MovieCard movie={popmovie} />
                            </div>
                        ))}
                </div>

                <h5 style={{ marginTop: '3rem' }}>
                    {counter} of {topSeries.length}
                </h5>
                {counter < 250 && (
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
