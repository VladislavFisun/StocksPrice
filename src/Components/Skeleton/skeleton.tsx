import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonItem() {
  return (
    
      <Skeleton
        sx={{ bgcolor: 'grey.700' }}
        variant="rectangular"
        width={320}
        height={144}
      />
  
  );
}