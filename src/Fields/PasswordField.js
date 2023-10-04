import React, { useState } from 'react';
import { Grid, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityIconOff from '@mui/icons-material/VisibilityOff';

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  required,
  colSize,
  feedbackMessage,
  validated,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (password) => {
    if (validated && !password) {
      return 'Please enter a password.';
    }

    if (validated && password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }

    if (validated && !/[A-Z]/.test(password)) {
      return 'Password must contain at least one capital letter.';
    }

    if (validated && !/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }

    return null; // No errors
  };

  const passwordError = validatePassword(value);

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={6} xs={12} sx={{ mb: 4, mt: 4 }}>
      <TextField
        fullWidth
        label={label || 'Password*'}
        variant="outlined"
        type={passwordVisible ? 'text' : 'password'}
        required={required}
        value={value || ''}
        onChange={(e) => {
          onChange(e);
          setPasswordVisible(false); // Hide the password when typing
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {passwordVisible ? <VisibilityIcon /> : <VisibilityIconOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {passwordError && (
        <Typography variant="caption" color="error">
          {passwordError}
        </Typography>
      )}
      <div className="invalid-feedback">
        {validated && !passwordError && feedbackMessage}
      </div>
    </Grid>
  );
};

export default PasswordInput;
