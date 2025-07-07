import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroButton = styled.button`
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
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: #000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: #111;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #e50914;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const FeatureDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #b3b3b3;
  max-width: 600px;
  margin: 0 auto;
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlimited movies, TV shows, and more
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Watch anywhere. Cancel anytime.
          </HeroSubtitle>
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to watch? Enter your email to create or restart your membership.
          </HeroDescription>
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroButton className="play">
              <FaPlay /> Play
            </HeroButton>
            <HeroButton className="info">
              <FaInfoCircle /> More Info
            </HeroButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>Why Choose Netflix?</SectionTitle>
          <SectionSubtitle>
            Discover why millions of people choose Netflix for their entertainment needs
          </SectionSubtitle>
          
          <FeatureGrid>
            <FeatureCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon>🎬</FeatureIcon>
              <FeatureTitle>Unlimited Entertainment</FeatureTitle>
              <FeatureDescription>
                Stream thousands of movies and TV shows, including Netflix originals, award-winning films, and popular series.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon>📱</FeatureIcon>
              <FeatureTitle>Watch Anywhere</FeatureTitle>
              <FeatureDescription>
                Watch on your TV, computer, tablet, or phone. Download shows to watch offline on the go.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon>👥</FeatureIcon>
              <FeatureTitle>Multiple Profiles</FeatureTitle>
              <FeatureDescription>
                Create up to 5 profiles for different family members. Each profile gets personalized recommendations.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon>🚫</FeatureIcon>
              <FeatureTitle>Cancel Anytime</FeatureTitle>
              <FeatureDescription>
                No commitments, no contracts. Cancel your subscription anytime with just a few clicks.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <CTAButton to="/signup">Get Started</CTAButton>
          </div>
        </Container>
      </FeaturesSection>
    </>
  );
}

export default Home; 