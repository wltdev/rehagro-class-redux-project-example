import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { CustomerManagement } from './CustomerManagement';
import { OutroTela } from './OutroTela';

export const Pages = () => {
    const { currentPage } = useSelector((state: RootState) => state.pages);

    return <>{currentPage === 'customers' ? <CustomerManagement /> : <OutroTela />}</>;
};
