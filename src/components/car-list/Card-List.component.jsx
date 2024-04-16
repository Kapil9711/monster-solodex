import Card from "../card/card.component";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: grid;
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;
  padding-inline: 8px;
  padding-block-end: 32px;
  @media (min-width: 776px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 996px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardList = ({ monsters }) => {
  return (
    <ListWrapper>
      {monsters.map((monster) => (
        <Card key={monster.phone} monster={monster} />
      ))}
    </ListWrapper>
  );
};

export default CardList;
