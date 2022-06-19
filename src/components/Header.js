import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();
    const [activePage, setActivePage] = useState();
    useEffect(() => setActivePage(location.pathname), [location]);
    return (
        <header className="App-header">
            <Link style={{ marginLeft: '8vh' }} to="/">
                <img
                    src="https://imdb-api.com/img/Logo512x512.png"
                    alt="..."
                    style={{ height: '8vh', width: '8vh' }}
                ></img>
            </Link>
            <Link
                style={
                    activePage === '/'
                        ? {
                              marginLeft: '8vh',
                              fontWeight: 'bolder',
                              textDecoration: 'underline',
                              textUnderlineOffset: '2px',
                          }
                        : { marginLeft: '8vh' }
                }
                className="links"
                to="/"
            >
                <p>Home</p>
            </Link>
            <Link
                style={
                    activePage === '/series'
                        ? {
                              fontWeight: 'bolder',
                              textDecoration: 'underline',
                              textUnderlineOffset: '2px',
                          }
                        : {}
                }
                className="links"
                to="/series"
            >
                <p>Series</p>
            </Link>
            <Link
                style={
                    activePage === '/films'
                        ? {
                              fontWeight: 'bolder',
                              textDecoration: 'underline',
                              textUnderlineOffset: '2px',
                          }
                        : {}
                }
                className="links"
                to="/films"
            >
                <p>Films</p>
            </Link>

            <Link
                style={
                    activePage === '/about'
                        ? {
                              fontWeight: 'bolder',
                              textDecoration: 'underline',
                              textUnderlineOffset: '2px',
                          }
                        : {}
                }
                className="links"
                to="/about"
            >
                <p>About</p>
            </Link>
        </header>
    );
}
