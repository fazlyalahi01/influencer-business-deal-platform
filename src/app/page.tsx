"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { useOfferContext } from "@/contexts/offer-context";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const { offers } = useOfferContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOffers = offers.filter((offer) => {
    const term = searchTerm.toLowerCase();
    return (
      offer.title.toLowerCase().includes(term) ||
      offer.description.toLowerCase().includes(term) ||
      offer.influencer.toLowerCase().includes(term)
    );
  });

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Offers
      </Typography>

      <TextField
        label="Search Offers"
        fullWidth
        sx={{ mb: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title, description, or influencer"
      />

      <Grid container spacing={2}>
        {filteredOffers.length === 0 ? (
          <Typography variant="body2" sx={{ ml: 1 }}>
            No matching offers found.
          </Typography>
        ) : (
          filteredOffers.map((offer) => (
            <Grid size={{ xs: 12 }} key={offer.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{offer.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {offer.description}
                  </Typography>
                  <Typography variant="subtitle2">
                    By: {offer.influencer}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ my: 1 }}>
                    ${offer.price}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/buy/${offer.id}`}
                    variant="outlined"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
