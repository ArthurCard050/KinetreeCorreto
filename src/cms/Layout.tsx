import React from 'react';
import { Layout as RALayout, AppBar } from 'react-admin';
import { Typography } from '@mui/material';

const MyAppBar = () => (
  <AppBar>
    <Typography variant="h6" color="inherit" sx={{ flex: 1 }}>
      🌳 Kinetree CMS
    </Typography>
  </AppBar>
);

export const Layout = (props: any) => (
  <RALayout {...props} appBar={MyAppBar} />
);