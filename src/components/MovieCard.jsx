import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaPlus, FaInfoCircle, FaCheck } from 'react-icons/fa';

const CardContainer = styled(motion.div)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background-color: #2f2f2f;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 768px) {
    height: 225px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #2f2f2f, #404040);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    height: 225px;
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    height: 180px;
    font-size: 1.5rem;
  }
`;

const HoverOverlay = styled(motion.div)`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const MovieInfo = styled.div`
  color: #fff;
`;

const MovieTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const MovieMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #b3b3b3;
  margin-bottom: 0.5rem;
`;

const Rating = styled.span`
  color: #46d369;
  font-weight: 600;
`;

const Genre = styled.span`
  color: #b3b3b3;
`;

const Duration = styled.span`
  color: #b3b3b3;
`;

const BottomActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const BottomButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
`;

const AddToListButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  &.added {
    background-color: #46d369;
    border-color: #46d369;
  }
`;

function MovieCard({ movie, isSearchResult = false }) {
  const [isInList, setIsInList] = useState(false);
  
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const handleAddToList = (e) => {
    e.stopPropagation();
    setIsInList(!isInList);
    // Here you would typically add/remove from user's list in Firebase
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return '#46d369';
    if (rating >= 6) return '#f5c518';
    return '#e50914';
  };

  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/movie/${movie.id}`}>
        {imageUrl ? (
          <MovieImage 
            src={imageUrl} 
            alt={movie.title}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <PlaceholderImage>🎬</PlaceholderImage>
        )}
      </Link>

      <AddToListButton
        onClick={handleAddToList}
        className={isInList ? 'added' : ''}
        title={isInList ? 'Remove from list' : 'Add to list'}
      >
        {isInList ? <FaCheck /> : <FaPlus />}
      </AddToListButton>

      <HoverOverlay
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <TopActions>
          <ActionButton className="play" title="Play">
            <FaPlay />
          </ActionButton>
          <ActionButton title="More info">
            <FaInfoCircle />
          </ActionButton>
        </TopActions>

        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieMeta>
            <Rating style={{ color: getRatingColor(movie.vote_average) }}>
              {movie.vote_average.toFixed(1)} ★
            </Rating>
            {movie.release_date && (
              <span>{new Date(movie.release_date).getFullYear()}</span>
            )}
            {movie.runtime && (
              <Duration>{formatDuration(movie.runtime)}</Duration>
            )}
          </MovieMeta>
          {movie.overview && (
            <p style={{ fontSize: '0.8rem', lineHeight: '1.3', color: '#b3b3b3' }}>
              {movie.overview.length > 100 
                ? `${movie.overview.substring(0, 100)}...` 
                : movie.overview
              }
            </p>
          )}
        </MovieInfo>

        <BottomActions>
          <BottomButton className="play">
            <FaPlay /> Play
          </BottomButton>
          <BottomButton className="info">
            <FaInfoCircle /> More Info
          </BottomButton>
        </BottomActions>
      </HoverOverlay>
    </CardContainer>
  );
}

export default MovieCard; 