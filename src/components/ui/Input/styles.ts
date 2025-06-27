import styled, { css } from 'styled-components';

interface InputContainerProps {
  fullWidth: boolean;
}

interface InputFieldProps {
  hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

export const InputLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
`;

export const InputField = styled.input<InputFieldProps>`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.hasError ? '#e74c3c' : '#ddd'};
  font-size: 14px;
  outline: none;
  
  &:focus {
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 2px ${props => props.hasError ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
`;
