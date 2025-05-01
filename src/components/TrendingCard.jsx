import { Link } from 'react-router-dom';

const TrendingCard = ({ track, imageClass, nameClass, artistLinkClass }) => {
    return (
        <div>
            <Link to={`/artist/${track.artistId}`} className={artistLinkClass}>
                <img
                    src={track.image}
                    alt={`${track.name} cover`}
                    className={imageClass}
                />
            </Link>
            <h3 className={nameClass}>{track.name}</h3>
            <p>
                By{' '}
                <Link to={`/artist/${track.artistId}`} className={artistLinkClass}>
                    {track.artist}
                </Link>
            </p>
            <a href={track.url} target="_blank" rel="noopener noreferrer">
                Listen on Spotify
            </a>
        </div>
    );
};

export default TrendingCard;
