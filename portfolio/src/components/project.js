import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../components/data"; 

const Card = styled.div`
  width: 330px;
  height: 400px;
  background: linear-gradient(#DCEAEA, #D4D9B0, #F8DEC7);
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

 
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border: 2px solid rgb(124, 124, 124);
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-family: "Dancing Script", cursive;
  font-weight: 900px;
  font-size: 32px;
  font-style: normal;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 15px;
  margin-left: 2px;
  padding-top: 5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  font-family: "Satisfy";
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  text-align: center;
  font-family: "Dancing Script";
  font-size: 20px;
  font-style: normal;
  margin-top: 10px;
  &:hover {
    color: purple;
  }
`;

const CarouselContainer = styled.div`
  height: 87vh;
  display: flex;
  align-items: center;  
  justify-content: center;
  flex-direction: column;
     @media (max-width: 480px){
      height: 220vh;
      margin-left:4px;
      margin-right:4px;
      justify-content :start;
      margin-top: 10px;
      
  }
`;

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Satisfy", cursive;
  font-weight: 200px;
  font-style: normal;

  @media (max-width:480px){
    font-size:34px;
    top:0;
  }
`;

const Para = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  font-family: "Satisfy", cursive;

  @media (max-width:480px){
    font-size:16px;
    margin-top:-10px;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: hidden;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }


`;

const Arrow = styled.button`
  background-color: #444;
  border: none;
  color: #fff;
  font-size: 2em;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  position: absolute;
  ${({ direction }) => (direction === "left" ? "left: 20px;" : "right: 20px;")}
  z-index: 2;

  &:hover {
    background-color: #666;
    transform: scale(1.1);
  }

  @media (max-width:480px){
    margin-top:100vh;
  }

`;

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const index = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const index = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <ProjectTitle>Projects</ProjectTitle>
      <Para>I have worked on a wide range of web apps projects. Here are some of my projects.</Para>
      <Carousel>
        {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
          <Card key={index}>
            <Image src={project.imgUrl} />
            <Tags></Tags>
            <Details>
              <Title>{project.title}</Title>
              <Date>{project.date}</Date>
              <Description>{project.description}</Description>
            </Details>
            <Button href={project.github} target="_blank" >
              View Code
            </Button>
          </Card>
        ))}
      </Carousel>
      <Arrow className="arrow left-arrow" direction="left" onClick={prevSlide}>
        {"<"}
      </Arrow>
      <Arrow className="arrow right-arrow" direction="right" onClick={nextSlide}>
        {">"}
      </Arrow>
    </CarouselContainer>
  );
}

export default Project;
