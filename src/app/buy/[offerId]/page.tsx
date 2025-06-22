"use client";

import { useOfferContext } from "@/contexts/offer-context";
import { Box, Button, Container, Snackbar, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BuyPage() {
  const { offerId } = useParams();
  const { offers } = useOfferContext();
  const [open, setOpen] = useState(false);

  console.log(offerId, "offerId....");
  const offer = offers.find((o) => o.id === offerId);

  if (!offer) {
    return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h6" color="error">
          Offer not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Confirm Your Purchase
      </Typography>

      <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mb: 3 }}>
        <Typography variant="subtitle1">{offer.title}</Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          {offer.description}
        </Typography>
        <Typography variant="body2">
          <strong>Influencer:</strong> {offer.influencer}
        </Typography>
        <Typography variant="body2">
          <strong>Price:</strong> {offer.price}
        </Typography>
      </Box>

      <Button variant="contained" fullWidth onClick={() => setOpen(true)}>
        Pay Now
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message="Payment successful. The influencer will contact you soon!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </Container>
  );
}
