import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import TrendingArtist from './pages/TrendingArtist';
import Artist from './pages/Artist';
import About from './pages/About';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/artists" element={<TrendingArtist />} />
                <Route path="/artist/:id" element={<Artist />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
