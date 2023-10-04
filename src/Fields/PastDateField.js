import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

const PastDateField = ({
  label,
  name,
  value,
  onChange,
  required,
  colSize,
  feedbackMessage,
  validated,
}) => {
  // Get the current date in ISO format (YYYY-MM-DD)
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={6} xs={12} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        type="date"
        name={name}
        value={value}
        label={label || 'Date*'}
        required={required}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          max: currentDate,
        }}
        onChange={onChange}
      />
      {validated && feedbackMessage && (
        <Typography variant="caption" color="error">
          {feedbackMessage}
        </Typography>
      )}
    </Grid>
  );
};

export default PastDateField;
