import { Paper } from '@mui/material';
import styled from 'styled-components';

export const PageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
`;

export const PageHeader = styled.header`
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
`;

export const PageTitle = styled.h1`
    font-size: 24px;
    color: #333;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormSection = styled.section`
    margin-bottom: 24px;
`;

export const FormTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
    color: #333;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h3`
    font-size: 18px;
    color: #333;
`;

export const ModalCloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #777;

    &:hover {
        color: #333;
    }
`;

export const PaperContainer = styled(Paper)`
    width: 100%;
`;

export const CustomersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    @media (max-width: 480px) {
        gap: 8px;
    }

    @media (max-width: 360px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`;
