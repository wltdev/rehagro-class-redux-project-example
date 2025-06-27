import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    button + button {
        margin-left: 12px;
    }
`;
