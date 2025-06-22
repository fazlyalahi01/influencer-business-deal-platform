"use client";

import { useAuth } from "@/contexts/auth-context";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InfluencerDashboard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/influencer/login");
    }
  }, [isLoggedIn]);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5">Influencer Dashboard</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        You&apos;re logged in. Routes for &quot;My Offers&quot; and &quot;Create
        Offer&quot; will go here.
      </Typography>
    </Container>
  );
}
