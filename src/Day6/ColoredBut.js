import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" style={{color:"black", background:"blue"}}> Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error" style={{color:"black", background:"red"}}>
        Error
      </Button>
    </Stack>
  );
}

