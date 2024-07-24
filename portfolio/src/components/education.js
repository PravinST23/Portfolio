import React from "react";
import styled from "styled-components";
import { education } from "../components/data";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  height: 87vh;
    @media (max-width: 480px) {
    flex-direction: column;
    height:135vh;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 150px;
  z-index: -1;
  
  @media (max-width: 480px) {
    margin-left:-50px;
    width:157%;
  }
`;

const EducationCard = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  background: linear-gradient(#05b3a5c6, #DCEAEA, #05b3a5c6);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  border: 2px solid rgb(124, 124, 124);
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 480px) {
    margin-right:100px;
  }
`;

const EducationTitle = styled.div`
  font-family: "Satisfy", cursive;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

const EducationDetails = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  padding: 10px;
  border-radius: 12px;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const rotateAnimation = `
  @keyframes rotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
`;

const EducationImg = styled.img`
  width: 50px;
  margin-right: 30px;
  animation: rotate 3s linear infinite;
  ${rotateAnimation}
    @media (max-width: 480px) {
    margin-right: 10px;
    margin-bottom: 10px;
  } 
`;

const ProjectTitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  font-family: "Satisfy", cursive;
  padding-top: 20px;
    @media (max-width: 480px) {
        font-size:16px;
    margin-top:-10px;
  }
`;

function Education() {
  return (
    <Container id="Education">
      <Wrapper>
        <ProjectTitle>My education has been a journey of self-discovery and growth. My educational details are as follows.</ProjectTitle>
        <EducationContainer>
          {education.map((edu, index) => (
            <Tilt key={`edu-${index}`}>
              <EducationCard>
                {edu.imgUrl && <EducationImg src={edu.imgUrl} alt={`${edu.school} logo`} />}
                <div>
                  <EducationTitle>{edu.school}</EducationTitle>
                  <EducationDetails>
                    <div>{edu.degree}</div>
                    <div>{edu.date}</div>
                    <div>Grade: {edu.grade}</div>
                  </EducationDetails>
                </div>
              </EducationCard>
            </Tilt>
          ))}
        </EducationContainer>
      </Wrapper>
    </Container>
  );
}

export default Education;
