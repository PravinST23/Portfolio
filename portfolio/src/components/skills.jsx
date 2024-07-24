import React from "react";
import styled from "styled-components";
import { skills } from "../components/data";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ralative;
  z-index: -1;
`;

const Wrapper = styled.div`
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1180px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    height: 155vh;
  }
  
`;



const Desc = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  font-family: "Satisfy", cursive;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #05b3a5c6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    border: 2px solid rgb(124, 124, 124);
  border-radius: 16px;
  padding: 18px 36px;
  z-index:-1;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 26px;
  }

  @media (max-width: 480px) {
    padding: 10px 40px;
    width:75%;
    margin-left:3px;
  
  }
`;
const SkillTitle = styled.div`
  font-family: "Satisfy", cursive;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImg = styled.img`
  width: 24px;
  height: 24px;
`;

function Skills() {
  return (
    <Container id="Skills">
      <Wrapper>``
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImg src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;