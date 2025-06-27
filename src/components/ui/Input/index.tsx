import React from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

interface InputProps extends Omit<TextFieldProps, 'error'> {
    label: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, error, fullWidth = false, ...rest }) => {
    return (
        <TextField
            label={label}
            error={!!error}
            helperText={error}
            fullWidth={fullWidth}
            variant="outlined"
            margin="normal"
            {...rest}
        />
    );
};

export default Input;
