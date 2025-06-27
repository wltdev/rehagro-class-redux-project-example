import React from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    variant?: 'primary' | 'secondary' | 'danger';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, ...rest }) => {
    const muiVariant = variant === 'danger' ? 'contained' : 'contained';
    const muiColor = variant === 'primary' ? 'primary' : variant === 'secondary' ? 'secondary' : 'error';

    return (
        <MuiButton
            variant={muiVariant}
            color={muiColor}
            fullWidth={fullWidth}
            sx={{
                mb: 4,
                borderRadius: 2,
                width: '100%',
                background: 'linear-gradient(45deg, #232324 40%, #474849 80%)',
                boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.5)',
                color: 'white'
            }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
