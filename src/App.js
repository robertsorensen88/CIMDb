import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Home } from './views/Home';
import { About } from './views/About';
import { Movies } from './views/Movies';
import { Series } from './views/Series';
import { Header } from './components/Header';
import { MovieDetails } from './views/MovieDetails';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Movies />} />
                <Route path="/film/:movieId" element={<MovieDetails />} />
                <Route path="/series" element={<Series />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
