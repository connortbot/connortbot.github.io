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
          {'\u{1F4BE}'} swe @ <WeakHighlight as="a" href="https://helicone.ai" style={{ textDecoration: 'underline' }}>helicone (yc w23)</WeakHighlight> 
        </Description>
        <Description>
          {'\u{1F4BC}'} prev. <Highlight>@ cohere, td bank</Highlight>
        </Description>
        <Description>
          {'\u{1F4D6}'} currently studying computer science @ uwaterloo
        </Description>
      </LeftColumn>
      <RightColumn>
        <ExperienceItem
          title="Software Engineer Intern"
          company="Helicone (YC W23)"
          description="Core product - LLM routing and observability w/ Clickhouse."
        />
        <ExperienceItem
          title="Software Engineer Intern"
          company="TD Bank"
          description="Agentic Voice AI in the Innovation Lab"
        />
        <ExperienceItem
          title="Software Engineer"
          company="Squeak"
          description="Language learning made for teachers and students who love to read."
        />
        <ExperienceItem
          title="Senior Data Specialist"
          company="Cohere AI"
          description="Retrieval Augmented Generation (RAG) for Command-R+"
        />
        <ExperienceItem
          title="Software Engineer"
          company="Markland Wood Golf Club"
          description="Automation for User Data on Cloud"
        />
      </RightColumn>
    </HomeContainer>
  );
};
  
export default Home;
