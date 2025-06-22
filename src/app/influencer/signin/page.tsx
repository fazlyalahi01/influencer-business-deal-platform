"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push("/influencer/dashboard");
  };

  const populateDummyCredentials = () => {
    setEmail("influencer@example.com");
    setPassword("password123");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" gutterBottom>
        Influencer Login
      </Typography>

      <Box component="form" onSubmit={handleLogin}>
        <TextField
          label="Email"
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
        <Button variant="contained" fullWidth type="submit">
          Login
        </Button>

        <Stack spacing={2} sx={{ my: 2 }}>
          <Button variant="outlined" onClick={populateDummyCredentials}>
            Use Dummy Credentials
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
