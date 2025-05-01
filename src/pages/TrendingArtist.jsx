import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSpotifyToken } from '../spotify';
import styles from '../styles/TrendingArtist.module.css';

const clientId = '7a4e876d6e93400eabe1ba40c9313c1b';
const clientSecret = 'c61d6e3c05204e4d835037922e6a67db';
const playlistId = '6UeSakyzhiEt4NB3UAd6NQ';

export default function TrendingArtist() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchArtists() {
            try {
                const token = await getSpotifyToken(clientId, clientSecret);

                const res = await fetch(
                    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=US`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                const data = await res.json();

                const ids = [
                    ...new Set(data.items.map(item => item.track.artists[0].id))
                ];

                const batch = ids.slice(0, 50).join(',');
                const artistsRes = await fetch(
                    `https://api.spotify.com/v1/artists?ids=${batch}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                const artistsData = await artistsRes.json();

                setArtists(artistsData.artists);
            } catch (err) {
                console.error(err);
                setError('Failed to load artists');
            } finally {
                setLoading(false);
            }
        }
        fetchArtists();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading artists…</p>;
    if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending Artists</h1>
            <hr className={styles.divider} />
            <ul className={styles.grid}>
                {artists.map(artist => (
                    <li key={artist.id} className={styles.card}>
                        <Link to={`/artist/${artist.id}`} className={styles.link}>
                            <div
                                className={styles.image}
                                style={{ backgroundImage: `url(${artist.images[1]?.url})` }}
                                aria-label={artist.name}
                            />
                            <h2 className={styles.name}>{artist.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
