'use client';

import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useOfferContext } from '@/contexts/offer-context';

export default function CreateOfferForm() {
  const { addOffer } = useOfferContext();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addOffer({
      id: uuidv4(),
      influencer: 'Jane Creator', // static influencer for now
      title,
      description: desc,
      price,
    });

    // Reset form
    setTitle('');
    setDesc('');
    setPrice('');
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
        sx={{ mb: 2 }}
        multiline
        rows={3}
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
    </Box>
  );
}
