import { createBrowserRouter } from 'react-router';
import { CustomerManagement } from '../pages/CustomerManagement';
import { PageUseState } from '../pages/useState';
import { PageUseEffect } from '../pages/useEffect';
import { PageUseRef } from '../pages/useRef';
import { PageUseReducer } from '../pages/useReducer';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <CustomerManagement />
    },
    {
        path: '/usestate',
        element: <PageUseState />
    },
    {
        path: '/useeffect',
        element: <PageUseEffect />
    },
    {
        path: '/useref',
        element: <PageUseRef />
    },
    {
        path: '/usereducer',
        element: <PageUseReducer />
    }
]);
