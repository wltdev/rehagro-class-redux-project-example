import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 24px;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;

    h3 {
        font-size: 18px;
        color: #333;
    }

    p {
        font-size: 14px;
        color: #777;
    }
`;

export const CustomerItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

export const CustomerInfo = styled.div`
    flex: 1;
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

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: column;

    button {
        margin-bottom: 8px;
        min-width: 80px;
    }
`;
