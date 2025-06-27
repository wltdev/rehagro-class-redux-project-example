import { createTheme, PaletteMode } from '@mui/material/styles';

// Define theme settings for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // Light mode palette
                  primary: {
                      main: '#1976d2',
                      light: '#42a5f5',
                      dark: '#1565c0'
                  },
                  secondary: {
                      main: '#9c27b0',
                      light: '#ba68c8',
                      dark: '#7b1fa2'
                  },
                  error: {
                      main: '#d32f2f'
                  },
                  warning: {
                      main: '#ed6c02'
                  },
                  info: {
                      main: '#0288d1'
                  },
                  success: {
                      main: '#2e7d32'
                  },
                  background: {
                      default: '#f5f5f5',
                      paper: '#ffffff'
                  },
                  text: {
                      primary: '#333333',
                      secondary: '#666666'
                  }
              }
            : {
                  // Dark mode palette - elegant dark theme
                  primary: {
                      main: '#90caf9', // Lighter blue for dark mode
                      light: '#e3f2fd',
                      dark: '#42a5f5'
                  },
                  secondary: {
                      main: '#ce93d8', // Lighter purple for dark mode
                      light: '#f3e5f5',
                      dark: '#ab47bc'
                  },
                  error: {
                      main: '#f44336'
                  },
                  warning: {
                      main: '#ffa726'
                  },
                  info: {
                      main: '#29b6f6'
                  },
                  success: {
                      main: '#66bb6a'
                  },
                  background: {
                      default: '#121212', // Material UI recommended dark background
                      paper: '#1e1e1e' // Slightly lighter than the background for cards
                  },
                  text: {
                      primary: '#ffffff',
                      secondary: '#b0b0b0'
                  }
              })
    },
    typography: {
        fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: mode === 'dark' ? '0 4px 20px 0 rgba(0, 0, 0, 0.5)' : undefined
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none' as const,
                    borderRadius: '8px'
                }
            }
        }
    }
});

// Create the dark theme
const theme = createTheme(getDesignTokens('dark'));

export default theme;
