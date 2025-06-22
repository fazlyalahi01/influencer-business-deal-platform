"use client";

import { useOfferContext } from "@/contexts/offer-context";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateOfferForm() {
  const { addOffer } = useOfferContext();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addOffer({
      id: uuidv4(),
      influencer: "Jane Creator",
      title,
      description: desc,
      price,
    });

    setTitle("");
    setDesc("");
    setPrice("");
    setSnackbarOpen(true);
  };

  const handleDummyOffer = () => {
    setTitle("Instagram Story Shoutout");
    setDesc(
      "I will promote your product to my 5K+ followers via a 24h story with a link."
    );
    setPrice("49");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Create a New Offer
      </Typography>

      <TextField
        label="Title"
        fullWidth
        sx={{ mb: 2 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={3}
        sx={{ mb: 2 }}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <TextField
        label="Price"
        fullWidth
        sx={{ mb: 2 }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <Button type="submit" variant="contained">
        Create Offer
      </Button>

      <Stack spacing={2} sx={{ my: 2 }}>
        <Button variant="outlined" onClick={handleDummyOffer}>
          Use Dummy Offer
        </Button>
      </Stack>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbarOpen(false)}
          sx={{ width: "100%" }}
        >
          Successfully added! You may see the offer on homepage and My Offer
          list.
        </Alert>
      </Snackbar>
    </Box>
  );
}
