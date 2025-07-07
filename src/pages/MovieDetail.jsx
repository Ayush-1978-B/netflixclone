import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMovies } from '../contexts/MovieContext';
import { FaPlay, FaPlus, FaInfoCircle, FaStar, FaClock, FaCalendar } from 'react-icons/fa';
import ReactPlayer from 'react-player';

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
  background-image: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'none'};
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

const TrailerSection = styled.div`
  margin-bottom: 3rem;
`;

const TrailerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
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
  const { fetchMovieDetails } = useMovies();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieData = await fetchMovieDetails(id);
        if (movieData) {
          setMovie(movieData);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        console.error('Error loading movie:', err);
        setError('Failed to load movie details');
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

  const backgroundImageUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

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

  const trailer = movie.videos?.results?.find(video => 
    video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <DetailContainer>
      <HeroSection>
        <BackgroundImage imageUrl={backgroundImageUrl} />
        
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
            <ActionButton className="play">
              <FaPlay /> Play
            </ActionButton>
            {trailer && (
              <ActionButton 
                className="info"
                onClick={() => setShowTrailer(!showTrailer)}
              >
                <FaInfoCircle /> Watch Trailer
              </ActionButton>
            )}
            <ActionButton className="add">
              <FaPlus /> My List
            </ActionButton>
          </ButtonGroup>
        </Content>
      </HeroSection>

      <ContentSection>
        {showTrailer && trailer && (
          <TrailerSection>
            <SectionTitle>Official Trailer</SectionTitle>
            <TrailerContainer>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
                width="100%"
                height="100%"
                controls
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </TrailerContainer>
          </TrailerSection>
        )}

        {movie.credits?.cast && movie.credits.cast.length > 0 && (
          <div>
            <SectionTitle>Cast</SectionTitle>
            <CastGrid>
              {movie.credits.cast.slice(0, 8).map((actor, index) => (
                <CastCard
                  key={actor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CastImage
                    src={actor.profile_path 
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : 'https://via.placeholder.com/200x300/333/666?text=No+Image'
                    }
                    alt={actor.name}
                  />
                  <CastInfo>
                    <CastName>{actor.name}</CastName>
                    <CastCharacter>{actor.character}</CastCharacter>
                  </CastInfo>
                </CastCard>
              ))}
            </CastGrid>
          </div>
        )}

        {movie.similar?.results && movie.similar.results.length > 0 && (
          <SimilarMovies>
            <SectionTitle>More Like This</SectionTitle>
            <MovieGrid>
              {movie.similar.results.slice(0, 6).map((similarMovie, index) => (
                <Link key={similarMovie.id} to={`/movie/${similarMovie.id}`}>
                  <MovieCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MovieImage
                      src={similarMovie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`
                        : 'https://via.placeholder.com/300x450/333/666?text=No+Image'
                      }
                      alt={similarMovie.title}
                    />
                    <MovieInfo>
                      <MovieTitle>{similarMovie.title}</MovieTitle>
                      <MovieMeta>
                        <span>{similarMovie.vote_average.toFixed(1)} ★</span>
                        {similarMovie.release_date && (
                          <span>{new Date(similarMovie.release_date).getFullYear()}</span>
                        )}
                      </MovieMeta>
                    </MovieInfo>
                  </MovieCard>
                </Link>
              ))}
            </MovieGrid>
          </SimilarMovies>
        )}
      </ContentSection>
    </DetailContainer>
  );
}

export default MovieDetail; 