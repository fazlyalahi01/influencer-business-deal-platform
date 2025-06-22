"use client";

import { useOfferContext } from "@/contexts/offer-context";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

export default function MyOffers() {
  const { offers } = useOfferContext();

  const currentInfluencer = "Jane Creator";

  const myOffers = offers.filter(
    (offer) => offer.influencer === currentInfluencer
  );

  if (myOffers.length === 0) {
    return <Typography>No offers created yet.</Typography>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {myOffers.map((offer) => (
          <TableRow key={offer.id}>
            <TableCell>{offer.title}</TableCell>
            <TableCell>{offer.description}</TableCell>
            <TableCell>{offer.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
