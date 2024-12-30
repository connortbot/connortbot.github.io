import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeContainer = styled(motion.div)`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  padding: 15vh 5vw;
`;

const LeftColumn = styled.div`
  flex: 2;
  padding-right: 40px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Greeting = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #377047;
  font-family: 'Hanken Grotesk', sans-serif;
  line-height: normal;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: normal;
  color: #6A6A6A;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 400;
  margin: 10px 0;
`;

const Highlight = styled.span`
  color: #377047;
  font-weight: bold;
  cursor: pointer;
`;

const WeakHighlight = styled.span`
  color: #377047;
  font-style: italic;
`;

const ExperienceItemContainer = styled.div`
  margin: 10px 0;
`;

const ExperienceTitle = styled.p`
  font-size: 18px;
  color: #377047;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: bold;
  margin: 0;
`;

const ExperienceCompany = styled.p`
  font-size: 16px;
  color: #377047;
  font-family: 'Hanken Grotesk', sans-serif;
  font-style: italic;
  margin: 2px 0;
`;

const ExperienceDescription = styled.p`
  font-size: 16px;
  color: #6A6A6A;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 400;
  margin: 2px 0;
`;

const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
};

const ExperienceItem = ({ title, company, description }) => (
  <ExperienceItemContainer>
    <ExperienceTitle>{title}</ExperienceTitle>
    <ExperienceCompany>{company}</ExperienceCompany>
    <ExperienceDescription>{description}</ExperienceDescription>
  </ExperienceItemContainer>
);

const Home = () => {
  return (
    <HomeContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <LeftColumn>
        <Greeting>hi, i'm connor {'\u{1F631}'}</Greeting>
        <Description>
          {'\u{1F4BE}'} seeking summer 2025 internships at startups driven by film arts, machine learning, or involving <WeakHighlight>scaling cloud infrastructure.</WeakHighlight>
        </Description>
        <Description>
          {'\u{1F4BB}'} curr. swe <Highlight> @ td bank</Highlight>
        </Description>
        <Description>
          {'\u{1F4BC}'} prev. senior data <Highlight>@ cohere</Highlight>
        </Description>
        <Description>
          {'\u{1F4D6}'} currently studying computer science {'\u{2795}'} business @ uwaterloo/laurier
        </Description>
      </LeftColumn>
      <RightColumn>
        <ExperienceItem
          title="Software Engineer Intern"
          company="TD Bank"
          description="Innovation Lab"
        />
        <ExperienceItem
          title="Co-Founder, Software Engineer"
          company="Squeak"
          description="Language learning through stories you love"
        />
        <ExperienceItem
          title="Software Engineer Intern (Senior Data Specialist)"
          company="Cohere AI"
          description="Retrieval Augmented Generation (RAG) for Command-R+"
        />
        <ExperienceItem
          title="Software Engineer Intern"
          company="Markland Wood Golf Club"
          description="Cloud User Data Automation"
        />
      </RightColumn>
    </HomeContainer>
  );
};
  
export default Home;