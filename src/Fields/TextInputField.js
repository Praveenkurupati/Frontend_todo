import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

const TextInputField = ({
  label,
  name,
  required,
  value,
  type,
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
      setError(
        `Please enter a valid ${name} ${textType} (max ${maxLength} ${textType})`
      );
    }
  };

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={6} xs={12}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        required={required}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={handleInputChange}
        inputProps={{ maxLength: maxLength }}
        error={!!error}
      />
      <FormHelperText sx={{ color: 'red' }}>
        {error ||
          (validated && !validationRegex.test(value) && feedbackMessage) ||
          (validated && value.length <= 0 && feedbackMessage)}
      </FormHelperText>
    </Grid>
  );
};

export default TextInputField;
