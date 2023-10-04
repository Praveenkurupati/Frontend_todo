import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

const MobileNumber = ({
  label,
  name,
  required,
  value,
  onChange,
  placeholder,
  feedbackMessage,
  colSize,
  validated,
  validationRegex,
  maxLength,
  textType,
}) => {
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    // Check if the input exceeds maxLength
    if (maxLength && inputValue.length > maxLength) {
      inputValue = inputValue.substring(0, maxLength);
    }

    const isValidInput = validationRegex.test(inputValue);

    if (isValidInput) {
      setError(null);
      onChange({ target: { name, value: inputValue } });
    } else {
      setError(`Please enter a valid ${name} ${textType} (max ${maxLength} ${textType})`);
    }
  };

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={6} xs={12} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        label={label || 'Pincode'}
        type="text"
        onChange={handleInputChange}
        inputProps={{
          maxLength: maxLength,
        }}
        error={!!error}
        helperText={
          error ||
          (validated && !validationRegex.test(value) && feedbackMessage) ||
          (validated && value.length <= 0 && 'Please enter a pincode.')
        }
      />
    </Grid>
  );
};

export default MobileNumber;
