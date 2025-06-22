"use client";

import { Offer } from "@/contexts/offer-context";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function OfferCard({
  id,
  influencer,
  title,
  description,
  price,
}: Offer) {
  const router = useRouter();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Influencer:</strong> {influencer}
        </Typography>
        <Typography variant="body2">
          <strong>Price:</strong> {price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ mt: 2 }}
          onClick={() => router.push(`/buy/${id}`)}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}
