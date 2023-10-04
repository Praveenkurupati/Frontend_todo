import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid, IconButton, Typography } from '@mui/material';
import ChevronIcon from '../icons/fi_chevron-down.png';

const DropdownField = ({
  label,
  name,
  value,
  options,
  onChange,
  required,
  colSize,
  feedbackMessage,
  validated,
}) => {
  // Define the initial and expanded styles for the Select component
  const initialSelectStyle = { '& .MuiSelect-outlined': { paddingRight: '32px', width: '100px' } };
  const expandedSelectStyle = { '& .MuiSelect-outlined': { paddingRight: '32px', width: 'auto' } };

  // Determine which style to apply based on the selected value
  const selectStyle = value ? expandedSelectStyle : initialSelectStyle;

  return (
    <Grid item lg={colSize} xl={colSize} md={colSize} sm={colSize} xs={12} sx={{ mb: 4 }}>
      <FormControl fullWidth variant="outlined">
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          sx={selectStyle} // Apply the selected style
        >
          <MenuItem value="">{`Select ${name || 'Option'}*`}</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <IconButton aria-label="open-dropdown" edge="end" sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
          <img src={ChevronIcon} alt="Chevron Icon" className="chevron-icon" />
        </IconButton>
        {validated && feedbackMessage && (
          <Typography variant="caption" color="error">
            {feedbackMessage}
          </Typography>
        )}
      </FormControl>
    </Grid>
  );
};

export default DropdownField;
