import { Typography, Stack } from "@mui/material";

const Contents = ({ name, email }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" component={"h1"}>
        {name.slice(0, 20)}
      </Typography>
      <Typography component={"h2"}>{email}</Typography>
    </Stack>
  );
};

export default Contents;
