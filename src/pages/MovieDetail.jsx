import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMovies } from '../contexts/MovieContext';
import { FaPlay, FaPlus, FaInfoCircle, FaStar, FaClock, FaCalendar } from 'react-icons/fa';
import { useCustomTitle } from '../hooks/useDocumentTitle';

const DetailContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
`;

const HeroSection = styled.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
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
  z-index: -2;
  
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

const Content = styled.div`
  max-width: 800px;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MetaInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #b3b3b3;
  flex-wrap: wrap;
`;

const Rating = styled.span`
  color: #46d369;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Year = styled.span`
  color: #b3b3b3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Duration = styled.span`
  color: #b3b3b3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const MaturityRating = styled.span`
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e5e5e5;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
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
  
  &.add {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border: 1px solid #fff;
    
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

const ContentSection = styled.div`
  padding: 3rem 4%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CastCard = styled(motion.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CastImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CastInfo = styled.div`
  padding: 1rem;
`;

const CastName = styled.h4`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const CastCharacter = styled.p`
  color: #b3b3b3;
  font-size: 0.9rem;
`;



const SimilarMovies = styled.div`
  margin-bottom: 3rem;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const MovieCard = styled(motion.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 1rem;
`;

const MovieTitle = styled.h4`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const MovieMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #b3b3b3;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 1.2rem;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b3b3b3;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`;

function MovieDetail() {
  const { id } = useParams();
  const { fetchMovieDetails, playTrailer } = useMovies();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerLoading, setTrailerLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState('Loading... - Netflix Clone');

  // Use custom title hook
  useCustomTitle(pageTitle);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieData = await fetchMovieDetails(id);
        if (movieData) {
          setMovie(movieData);
          // Set dynamic title for movie details
          setPageTitle(`${movieData.title} (${movieData.year}) - Netflix Clone`);
        } else {
          setError('Movie not found');
          setPageTitle('Movie Not Found - Netflix Clone');
        }
      } catch (err) {
        console.error('Error loading movie:', err);
        setError('Failed to load movie details');
        setPageTitle('Error - Netflix Clone');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadMovie();
    }
  }, [id, fetchMovieDetails]);

  if (loading) {
    return (
      <DetailContainer>
        <LoadingContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{ marginRight: '1rem' }}
          >
            ⏳
          </motion.div>
          Loading movie details...
        </LoadingContainer>
      </DetailContainer>
    );
  }

  if (error || !movie) {
    return (
      <DetailContainer>
        <ErrorContainer>
          <ErrorTitle>Oops!</ErrorTitle>
          <ErrorText>
            {error || 'We couldn\'t find the movie you\'re looking for.'}
          </ErrorText>
          <BackButton to="/browse">Back to Browse</BackButton>
        </ErrorContainer>
      </DetailContainer>
    );
  }

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
    <DetailContainer>
      <HeroSection>
        <BackgroundImage $imageUrl={backgroundImageUrl} />
        
        <Content>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {movie.title}
          </Title>

          <MetaInfo
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Rating style={{ color: getRatingColor(movie.vote_average) }}>
              <FaStar /> {movie.vote_average.toFixed(1)}
            </Rating>
            {movie.release_date && (
              <Year>
                <FaCalendar /> {new Date(movie.release_date).getFullYear()}
              </Year>
            )}
            {movie.runtime && (
              <Duration>
                <FaClock /> {formatDuration(movie.runtime)}
              </Duration>
            )}
            <MaturityRating>TV-MA</MaturityRating>
          </MetaInfo>

          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {movie.overview}
          </Description>

          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ActionButton 
              className="play"
              onClick={handleTrailerClick}
              disabled={trailerLoading}
            >
              <FaPlay /> {trailerLoading ? 'Loading...' : 'Play'}
            </ActionButton>
            <ActionButton 
              className="info"
              onClick={handleTrailerClick}
              disabled={trailerLoading}
            >
              <FaInfoCircle /> {trailerLoading ? 'Loading...' : 'Watch Trailer'}
            </ActionButton>
            <ActionButton className="add">
              <FaPlus /> My List
            </ActionButton>
          </ButtonGroup>
        </Content>
      </HeroSection>

      <ContentSection>

        {movie.cast && movie.cast.length > 0 && (
          <div>
            <SectionTitle>Cast</SectionTitle>
            <CastGrid>
              {movie.cast.slice(0, 8).map((actor, index) => (
                <CastCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CastImage
                    src="https://via.placeholder.com/200x300/333/666?text=No+Image"
                    alt={actor.person?.name || 'Unknown'}
                  />
                  <CastInfo>
                    <CastName>{actor.person?.name || 'Unknown'}</CastName>
                    <CastCharacter>{actor.character || 'Unknown'}</CastCharacter>
                  </CastInfo>
                </CastCard>
              ))}
            </CastGrid>
          </div>
        )}

        {/* Similar movies functionality removed as Trakt API doesn't provide this data easily */}
      </ContentSection>
    </DetailContainer>
  );
}

export default MovieDetail; 