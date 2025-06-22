"use client";

import CreateOfferForm from "@/components/influencer/create-offer-form";
import MyOffers from "@/components/influencer/my-offers";
import { useAuth } from "@/contexts/auth-context";
import {
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function InfluencerDashboard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState<
    "my-offers" | "create-offer"
  >("my-offers");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/influencer/signin");
    }
  }, [isLoggedIn]);

  return (
    <Grid container sx={{ minHeight: "80vh" }}>
      {/* Sidebar */}
      <Grid
        size={{ xs: 12, sm: 3, md: 2 }}
        sx={{ borderRight: "1px solid #ddd", p: 2 }}
      >
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>
        <List>
          <ListItemButton
            selected={selectedPage === "my-offers"}
            onClick={() => setSelectedPage("my-offers")}
          >
            <ListItemText primary="My Offers" />
          </ListItemButton>
          <ListItemButton
            selected={selectedPage === "create-offer"}
            onClick={() => setSelectedPage("create-offer")}
          >
            <ListItemText primary="Create Offer" />
          </ListItemButton>
        </List>
      </Grid>

      {/* Main Content */}
      <Grid size={{ xs: 12, sm: 9, md: 10 }} sx={{ p: 2 }}>
        {selectedPage === "my-offers" && <MyOffers />}
        {selectedPage === "create-offer" && <CreateOfferForm />}
      </Grid>
    </Grid>
  );
}
