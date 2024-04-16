import { Stack } from "@mui/material";
import styled from "styled-components";
import Image from "./Image.component";
import Contents from "./Content.component";

const StackWrapper = styled(Stack)`
  background: linear-gradient(hsl(145 80% 45%), hsl(130 70% 45%));
  padding: 8px 6px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  @media (pointer: fine) {
    &:hover {
      transform: scale(1.06);
    }
  }
`;

const Card = ({ monster }) => {
  return (
    <StackWrapper spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Image id={monster.id} />
      <Contents name={monster.name} email={monster.email} />
    </StackWrapper>
  );
};

export default Card;
