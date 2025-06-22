'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
          PromoHub
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => router.push('/influencer/signup')}>
            Join as Influencer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
