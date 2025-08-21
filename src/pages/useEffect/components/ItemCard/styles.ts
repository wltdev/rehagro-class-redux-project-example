import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(45deg, rgb(178, 178, 179) 40%, rgb(113, 114, 116) 80%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
`;

export const CardActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const CustomerName = styled.h4`
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
`;

export const CustomerDetails = styled.div`
    p {
        font-size: 14px;
        margin-bottom: 4px;
        color: #555;
    }
`;
