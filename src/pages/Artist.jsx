import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSpotifyToken } from '../spotify';
import styles from '../styles/Artist.module.css';

const clientId = '7a4e876d6e93400eabe1ba40c9313c1b';
const clientSecret = 'c61d6e3c05204e4d835037922e6a67db';

const Artist = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [topTracks, setTopTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const token = await getSpotifyToken(clientId, clientSecret);

                const artistRes = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const artistData = await artistRes.json();
                setArtist(artistData);

                const topRes = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const topData = await topRes.json();
                setTopTracks(topData.tracks);

                const albumRes = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&limit=5`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const albumData = await albumRes.json();
                setAlbums(albumData.items);

                setLoading(false);
            } catch (err) {
                setError('Failed to load artist data');
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.artistContainer}>
            <div className={styles.artistHeader}>
                {artist.images[0] && (
                    <img
                        src={artist.images[0].url}
                        alt={artist.name}
                        className={styles.artistImage}
                    />
                )}
                <div className={styles.artistInfo}>
                    <h1 className={styles.artistName}>{artist.name}</h1>
                    <p className={styles.artistFollowers}>
                        {artist.followers.total.toLocaleString()} Followers
                    </p>
                    <p>{artist.genres.join(', ')}</p>
                    <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className={styles.artistLink}>
                        View on Spotify
                    </a>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>Top Tracks</h2>
            <ul className={styles.grid}>
                {topTracks.slice(0, 5).map((track) => (
                    <li key={track.id} className={styles.card}>
                        <img
                            src={track.album.images[0]?.url}
                            alt={track.name}
                        />
                        <p className={styles.cardTitle}>{track.name}</p>
                    </li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>Albums</h2>
            <div className={styles.grid}>
                {albums.map((album) => (
                    <div key={album.id} className={styles.card}>
                        <img
                            src={album.images[0]?.url}
                            alt={album.name}
                        />
                        <p className={styles.cardTitle}>{album.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artist;
