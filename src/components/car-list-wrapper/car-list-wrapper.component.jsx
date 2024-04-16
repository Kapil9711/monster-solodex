import styled from "styled-components";
import CardList from "../car-list/Card-List.component";
import Title from "../title/Title.component";
import SearchBar from "../search-bar/SearchBar.component";
const Wrapper = styled.div`
  background: linear-gradient(hsl(155 80% 30%), hsl(130 100% 20%));
  min-height: 100vh;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  padding-block: 64px;
`;

const ListWrapper = ({ monsters, handleChange }) => {
  return (
    <Wrapper>
      <Header>
        <Title />
        <SearchBar placeholder="search monsters" handleChange={handleChange} />
      </Header>

      <CardList monsters={monsters} />
    </Wrapper>
  );
};

export default ListWrapper;
