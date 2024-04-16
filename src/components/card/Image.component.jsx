import styled from "styled-components";

const ImageWrapper = styled.img`
  display: block;
  max-width: 250px;
  height: 250px;
`;

const Image = ({ id }) => {
  return <ImageWrapper src={`https://robohash.org/${id}?set=set2`} />;
};

export default Image;
