import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay, FaInfoCircle } from 'react-icons/fa';
import MovieCard from './MovieCard';

const RowContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

const RowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const RowTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.3 : 1};
  
  &:hover:not(:disabled) {
    background-color: #fff;
    color: #000;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const MoviesContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const MoviesRow = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  padding: 0.5rem 0;
`;

const MovieCardWrapper = styled(motion.div)`
  flex-shrink: 0;
  width: 200px;
  
  @media (max-width: 768px) {
    width: 150px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #b3b3b3;
`;

function MovieRow({ title, movies, isSearchResults = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef(null);
  
  const itemsPerView = Math.floor((window.innerWidth - 80) / 220); // 220px per movie + gap
  const maxIndex = Math.max(0, movies.length - itemsPerView);

  const scrollLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      scrollRight();
    } else {
      scrollLeft();
    }
  };

  if (!movies || movies.length === 0) {
    return (
      <RowContainer>
        <RowTitle>{title}</RowTitle>
        <EmptyState>No movies available in this category.</EmptyState>
      </RowContainer>
    );
  }

  return (
    <RowContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
    >
      <RowHeader>
        <RowTitle>{title}</RowTitle>
        {movies.length > itemsPerView && (
          <NavigationButtons>
            <NavButton
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </NavButton>
            <NavButton
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex}
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </NavButton>
          </NavigationButtons>
        )}
      </RowHeader>

      <MoviesContainer>
        <MoviesRow
          ref={rowRef}
          style={{
            transform: `translateX(-${currentIndex * 220}px)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {movies.map((movie, index) => (
            <MovieCardWrapper
              key={movie.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <MovieCard 
                movie={movie} 
                isSearchResult={isSearchResults}
              />
            </MovieCardWrapper>
          ))}
        </MoviesRow>
      </MoviesContainer>
    </RowContainer>
  );
}

export default MovieRow; 