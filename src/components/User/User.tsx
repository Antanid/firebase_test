import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { endSession, getSession, isLoggedIn } from "../../session";

const User = () => {
  const [email, setEmail] = useState<string | null>("");
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    let session = getSession();
    setEmail(session.email);
    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
        You're logged in as:
      </Typography>
      <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h3" component="p" textAlign="center" gutterBottom>
        Check the console for your (access/session) token.
      </Typography>
      <Link to={'/login'}>
      <Button variant="contained" color="error" onClick={onLogout} sx={{ mt: 3 }} fullWidth>
        Log out
      </Button>
      </Link>
    </Container>
  );
};

export default User;
