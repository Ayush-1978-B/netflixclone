import React, { useState, useEffect } from 'react';
import { useMovies } from '../contexts/MovieContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MovieRow from '../components/MovieRow';
import HeroBanner from '../components/HeroBanner';


const BrowseContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 1.2rem;
`;

const ContentSection = styled.div`
  margin-top: -100px;
  position: relative;
  z-index: 2;
`;

const MovieRowsContainer = styled.div`
  padding: 0 4%;
`;

const RowTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b3b3b3;
`;

const EmptyStateTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const EmptyStateText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const RetryButton = styled.button`
  background-color: #e50914;
  color: #fff;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`;

const SearchResults = styled.div`
  padding: 2rem 4%;
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SearchTitle = styled.h2`
  color: #fff;
  font-size: 1.8rem;
`;

const ClearSearch = styled.button`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

function Browse() {
  const { trending, topRated, popular, upcoming, loading, searchMovies } = useMovies();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  if (loading) {
    return (
      <BrowseContainer>
        <LoadingContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{ marginRight: '1rem' }}
          >
            ⏳
          </motion.div>
          Loading amazing content...
        </LoadingContainer>
      </BrowseContainer>
    );
  }

  const hasContent = trending.length > 0 || topRated.length > 0 || popular.length > 0 || upcoming.length > 0;

  if (!hasContent) {
    return (
      <BrowseContainer>
        <EmptyState>
          <EmptyStateTitle>No Content Available</EmptyStateTitle>
          <EmptyStateText>
            We're having trouble loading your content. Please check your internet connection and try again.
          </EmptyStateText>
          <RetryButton onClick={() => window.location.reload()}>
            Try Again
          </RetryButton>
        </EmptyState>
      </BrowseContainer>
    );
  }

  return (
    <BrowseContainer>
      {searchQuery ? (
        <SearchResults>
          <SearchHeader>
            <SearchTitle>Search Results for "{searchQuery}"</SearchTitle>
            <ClearSearch onClick={() => setSearchQuery('')}>
              Clear Search
            </ClearSearch>
          </SearchHeader>
          {isSearching ? (
            <LoadingContainer>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ marginRight: '1rem' }}
              >
                🔍
              </motion.div>
              Searching...
            </LoadingContainer>
          ) : searchResults.length > 0 ? (
            <MovieRow 
              title="Search Results" 
              movies={searchResults} 
              isSearchResults={true}
            />
          ) : (
            <EmptyState>
              <EmptyStateTitle>No Results Found</EmptyStateTitle>
              <EmptyStateText>
                We couldn't find any movies matching "{searchQuery}". Try a different search term.
              </EmptyStateText>
            </EmptyState>
          )}
        </SearchResults>
      ) : (
        <>
          {trending.length > 0 && (
            <HeroBanner movie={trending[0]} />
          )}
          
          <ContentSection>
            <MovieRowsContainer>
              {trending.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <RowTitle>Trending Now</RowTitle>
                  <MovieRow title="Trending Now" movies={trending} />
                </motion.div>
              )}

              {popular.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <RowTitle>Popular on Netflix</RowTitle>
                  <MovieRow title="Popular on Netflix" movies={popular} />
                </motion.div>
              )}

              {topRated.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <RowTitle>Top Rated</RowTitle>
                  <MovieRow title="Top Rated" movies={topRated} />
                </motion.div>
              )}

              {upcoming.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <RowTitle>Coming Soon</RowTitle>
                  <MovieRow title="Coming Soon" movies={upcoming} />
                </motion.div>
              )}
            </MovieRowsContainer>
          </ContentSection>
        </>
      )}
    </BrowseContainer>
  );
}

export default Browse; 