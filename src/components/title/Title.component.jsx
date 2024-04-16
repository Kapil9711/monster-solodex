import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Jacquard 24", system-ui;
  font-size: 7rem;
  background: linear-gradient(to right, hsl(140 100% 40%), hsl(155 80% 60%));
  /* color: transparent; */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Title = () => {
  return <H1 variant="h1">Monsters</H1>;
};

export default Title;
