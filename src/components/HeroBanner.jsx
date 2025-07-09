import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useMovies } from '../contexts/MovieContext';

const BannerContainer = styled.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  padding: 0 4%;
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 400px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

const BannerContent = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const BannerTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const BannerDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #e5e5e5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BannerMeta = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #b3b3b3;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Rating = styled.span`
  color: #46d369;
  font-weight: 600;
`;

const Year = styled.span`
  color: #b3b3b3;
`;

const Duration = styled.span`
  color: #b3b3b3;
`;

const Genre = styled.span`
  color: #b3b3b3;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const BannerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

const VolumeButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 35px;
    height: 35px;
  }
`;

const MaturityRating = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 3;
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 0.7rem;
  }
`;

function HeroBanner({ movie }) {
  const [isMuted, setIsMuted] = useState(false);
  const [trailerLoading, setTrailerLoading] = useState(false);
  const { playTrailer } = useMovies();
  
  if (!movie) return null;

  const backgroundImageUrl = movie.backdrop_path || null;

  const formatDuration = (minutes) => {
    if (!minutes) return '';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return '#46d369';
    if (rating >= 6) return '#f5c518';
    return '#e50914';
  };

  const getMaturityRating = () => {
    return 'TV-MA';
  };

  const handleTrailerClick = async () => {
    if (!trailerLoading && movie) {
      setTrailerLoading(true);
      try {
        await playTrailer(movie);
      } catch (error) {
        console.error('Error loading trailer:', error);
      } finally {
        setTrailerLoading(false);
      }
    }
  };

  return (
    <BannerContainer>
      <BackgroundImage $imageUrl={backgroundImageUrl} />
      
      <MaturityRating>{getMaturityRating()}</MaturityRating>
      
      <VolumeButton onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </VolumeButton>

      <BannerContent>
        <BannerTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {movie.title}
        </BannerTitle>

        <BannerMeta
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Rating style={{ color: getRatingColor(movie.vote_average) }}>
            {movie.vote_average.toFixed(1)} ★
          </Rating>
          {movie.release_date && (
            <Year>{new Date(movie.release_date).getFullYear()}</Year>
          )}
          {movie.runtime && (
            <Duration>{formatDuration(movie.runtime)}</Duration>
          )}
          {movie.genre_ids && (
            <Genre>Action</Genre>
          )}
        </BannerMeta>

        <BannerDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {movie.overview && movie.overview.length > 200
            ? `${movie.overview.substring(0, 200)}...`
            : movie.overview
          }
        </BannerDescription>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BannerButton 
            className="play"
            onClick={handleTrailerClick}
            disabled={trailerLoading}
          >
            <FaPlay /> {trailerLoading ? 'Loading...' : 'Play'}
          </BannerButton>
          <Link to={`/movie/${movie.id}`}>
            <BannerButton className="info">
              <FaInfoCircle /> More Info
            </BannerButton>
          </Link>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
}

export default HeroBanner; 