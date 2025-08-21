import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import { ToastContainer } from 'react-toastify';
import { Provider as ReduxProvider } from 'react-redux';
import './server';
import { store } from './store';
import { RouterProvider } from 'react-router/dom';
import { router } from './router';

function App() {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <RouterProvider router={router} />
                <ToastContainer />
            </ThemeProvider>
        </ReduxProvider>
    );
}

export default App;
