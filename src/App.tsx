import GlobalStyles from './styles/GlobalStyles';
import { CustomerManagement } from './pages/CustomerManagement';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import { ToastContainer } from 'react-toastify';
import { Provider as ReduxProvider } from 'react-redux';
import './server';
import { store } from './store';
import { Pages } from './pages';

function App() {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <Pages />
                <ToastContainer />
            </ThemeProvider>
        </ReduxProvider>
    );
}

export default App;
