import { useMemo, useState } from 'react';
import {
    Container,
    Typography,
    IconButton,
    AppBar,
    Toolbar,
    TableContainer,
    Box,
    Fab,
    Tooltip,
    Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCustomerManagement } from './hook';
import type { Customer } from '../../types/customer';
import { GridColDef } from '@mui/x-data-grid';
import { CellType } from '../../types/table';
import { CustomTable } from '../../components/ui/CustomTable';
import { CustomersGrid, PaperContainer } from './styles';
import { CustomerModal } from '../../components/customer/CustomerModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { navigatePage } from '../../store/pageReducer';
import { CustomerCard } from '../../components/customer/CustomerCard';

export const CustomerManagement = () => {
    const { clientes, clienteSelecionado } = useSelector((state: RootState) => state.clientes);
    const dispatch = useDispatch();
    const {
        selectedCustomer,
        isModalOpen,
        isSubmitting,
        isAddMode,
        handleClienteSelecionado,
        handleDeleteCustomer,
        closeModal,
        handleOpenAddModal,
        handleOpenEditModal,
        handleSubmit
    } = useCustomerManagement();

    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '800px'
            }}
        >
            <AppBar
                position="static"
                color="primary"
                sx={{
                    mb: 4,
                    borderRadius: 2,
                    width: '100%',
                    background: 'linear-gradient(45deg, #232324 40%, #474849 80%)',
                    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.5)'
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="h1">
                        Simple Customer Management - Redux Example
                    </Typography>
                    <Tooltip title="Add Customer">
                        <Fab color="secondary" size="medium" onClick={handleOpenAddModal} aria-label="add customer">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            <CustomersGrid>
                {clientes.map((cliente) => (
                    <CustomerCard
                        key={cliente.id}
                        customer={cliente}
                        handleOpenEditModal={handleOpenEditModal}
                        handleDeleteCustomer={handleDeleteCustomer}
                        handleClienteSelecionado={handleClienteSelecionado}
                    />
                ))}
            </CustomersGrid>

            <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
                {clienteSelecionado.name}
            </Typography>

            <CustomerModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                isAddMode={isAddMode}
                handleSubmit={handleSubmit}
                selectedCustomer={selectedCustomer || undefined}
                isSubmitting={isSubmitting}
            />
        </Container>
    );
};
