// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const A = () => {
  return (
    <Tooltip title="Delete">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default A;
