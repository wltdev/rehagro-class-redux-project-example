import React from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

interface InputProps extends Omit<TextFieldProps, 'error'> {
    label: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, fullWidth = false, ...rest }, ref) => {
        return (
            <TextField
                inputRef={ref}
                label={label}
                error={!!error}
                helperText={error}
                fullWidth={fullWidth}
                variant="outlined"
                margin="normal"
                {...rest}
            />
        );
    }
);

export default Input;
