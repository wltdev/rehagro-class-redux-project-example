import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #121212;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }

  button {
    cursor: pointer;
  }

  /* Scrollbar styling for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #777;
  }

  /* Selection styling */
  ::selection {
    background: rgba(144, 202, 249, 0.3);
    color: #fff;
  }
`;

export default GlobalStyles;
