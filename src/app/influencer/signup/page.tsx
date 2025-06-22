"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could optionally store the name/email in localStorage here
    router.push("/influencer/signin");
  };

  const handleDummySignup = () => {
    setName("Jane Influencer");
    setEmail("influencer@example.com");
    setPassword("password123");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" gutterBottom>
        Join as Influencer
      </Typography>


      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" type="submit" fullWidth>
          Submit & Continue to Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Link href="/influencer/signin">Login</Link>
        </Typography>


      <Stack spacing={2} sx={{ my: 2 }}>
        <Button variant="outlined" onClick={handleDummySignup}>
          Use Dummy Credentials
        </Button>
      </Stack>
      </Box>
    </Container>
  );
}
