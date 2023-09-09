import { useRouteError } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const ErrorPage = () => {
  const error: Object | any = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h3" component="p" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="h3" component="p" gutterBottom>
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Container>
  );
};

export default ErrorPage;
