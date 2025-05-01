import { useEffect, useState } from 'react';
import { getSpotifyToken } from '../spotify';
import { Link } from 'react-router-dom';
import styles from '../styles/Trending.module.css';
import TrendingCard from '../components/TrendingCard';


const clientId = '7a4e876d6e93400eabe1ba40c9313c1b';
const clientSecret = 'c61d6e3c05204e4d835037922e6a67db';

export default function Trending() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const token = await getSpotifyToken(clientId, clientSecret);
                const playlistId = '5ABHKGoOzxkaa28ttQV9sE';
                const res = await fetch(
                    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                const data = await res.json();
                const cleaned = data.items.map(item => ({
                    name: item.track.name,
                    artist: item.track.artists[0].name,
                    artistId: item.track.artists[0].id,
                    image: item.track.album.images[1]?.url,
                    url: item.track.external_urls.spotify,
                }));
                setTracks(cleaned);
            } catch {
                setError('Error fetching Spotify data');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.trendingContainer}>
            <h1 className={styles.trendingTitle}>Trending Songs</h1>
            <hr className={styles.divider} />
            <ul className={styles.trendingGrid}>
                {tracks.map((track, i) => (
                    <li key={i} className={styles.trendingCard}>
                        <TrendingCard
                            track={track}
                            imageClass={styles.trendingImage}
                            nameClass={styles.trendingName}
                            artistLinkClass={styles.artistLink}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );

}
