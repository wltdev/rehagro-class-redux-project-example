import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger';
  fullWidth: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
  border: none;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: #3498db;
          color: white;
          &:hover {
            background-color: #2980b9;
          }
        `;
      case 'secondary':
        return css`
          background-color: #f1f1f1;
          color: #333;
          border: 1px solid #ddd;
          &:hover {
            background-color: #e1e1e1;
          }
        `;
      case 'danger':
        return css`
          background-color: #e74c3c;
          color: white;
          &:hover {
            background-color: #c0392b;
          }
        `;
      default:
        return css`
          background-color: #3498db;
          color: white;
          &:hover {
            background-color: #2980b9;
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
