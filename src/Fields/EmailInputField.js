import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

const EmailInputField = ({
  label,
  name,
  required,
  value,
  onChange,
  feedbackMessage,
  invalidEmailMessage,
  colSize,
  validated,
}) => {
  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange({ target: { name, value: inputValue } });
  };

  const emailValid = isValidEmail(value); // Check if the email is valid

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={6} xs={12} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        type="email"
        name={name}
        required={required}
        value={value}
        label={label || 'Email*'}
        placeholder='Email*'
        onChange={handleInputChange}
        error={validated && !emailValid}
        helperText={
          validated && !emailValid
            ? invalidEmailMessage || 'Please enter a valid email address.'
            : ''
        }
      />
      {validated && emailValid && feedbackMessage && (
        <Typography variant="body2" color="textSecondary">
          {feedbackMessage}
        </Typography>
      )}
    </Grid>
  );
};

export default EmailInputField;
