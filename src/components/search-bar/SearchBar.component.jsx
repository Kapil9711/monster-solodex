import { TextField } from "@mui/material";
import styled from "styled-components";
const Input = styled(TextField)`
  background-color: white;
  border: none;
  width: min(95%, 450px);
`;

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <Input
      onChange={handleChange}
      id="outlined-basic"
      label={placeholder}
      variant="filled"
      color="success"
    />
  );
};

export default SearchBar;
