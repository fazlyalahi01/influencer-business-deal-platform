"use client";

import OfferCard from "@/components/influencer/offer-card";
import { initialOffers } from "@/data/offer";
import { Box, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Explore Exciting Promo Offers
      </Typography>
      {/* todo: add search */}

      <Box mt={4}>
        {initialOffers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </Box>
    </Container>
  );
}
