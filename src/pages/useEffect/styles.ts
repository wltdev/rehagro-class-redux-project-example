import styled from 'styled-components';

export const ListItems = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 360px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`;
