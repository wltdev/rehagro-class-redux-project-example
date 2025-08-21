import { IconButton, Tooltip } from '@mui/material';
import { Customer } from '../../../types/customer';
import { Card, CardContent, CardActions, CustomerName, CustomerDetails } from './styles';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo } from 'react';

type Props = {
    customer: Customer;
    handleOpenEditModal: (customer: Customer) => void;
    handleDeleteCustomer: (id: string) => void;
    handleClienteSelecionado: (customer: Customer) => void;
};

export const CustomerCard = memo(
    ({ customer, handleOpenEditModal, handleDeleteCustomer, handleClienteSelecionado }: Props) => {
        console.log(`${customer.name} was rendered`);
        return (
            <Card>
                <CardContent>
                    <CustomerName>{customer.name}</CustomerName>
                    <CustomerDetails>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                    </CustomerDetails>
                </CardContent>
                <CardActions>
                    <Tooltip title="Edit">
                        <IconButton color="primary" onClick={() => handleOpenEditModal(customer)} size="small">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDeleteCustomer(customer.id)} size="small">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Selecionar cliente">
                        <IconButton color="warning" onClick={() => handleClienteSelecionado(customer)} size="small">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    },
    (prevProps, nextProps) => {
        // return true if the props are the same (do not re-render)
        // return false if the props are different (re-render)
        const customerEqual =
            prevProps.customer.name === nextProps.customer.name &&
            prevProps.customer.email === nextProps.customer.email &&
            prevProps.customer.phone === nextProps.customer.phone;

        // return true if the functions are the same (do not re-render)
        // return false if the functions are different (re-render)
        const functionsEqual =
            prevProps.handleOpenEditModal === nextProps.handleOpenEditModal &&
            prevProps.handleDeleteCustomer === nextProps.handleDeleteCustomer &&
            prevProps.handleClienteSelecionado === nextProps.handleClienteSelecionado;

        return customerEqual && functionsEqual;
    }
);
