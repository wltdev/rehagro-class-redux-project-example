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
import { PaperContainer } from './styles';
import { CustomerModal } from '../../components/customer/CustomerModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { navigatePage } from '../../store/pageReducer';

export const CustomerManagement = () => {
    const { clientes, clienteSelecionado } = useSelector((state: RootState) => state.clientes);
    const dispatch = useDispatch();
    const {
        selectedCustomer,
        isModalOpen,
        isSubmitting,
        isAddMode,
        setSelectedId,
        handleDeleteCustomer,
        closeModal,
        handleOpenAddModal,
        handleOpenEditModal,
        handleSubmit
    } = useCustomerManagement();

    const columns: GridColDef[] = useMemo(
        () => [
            {
                flex: 0.8,
                headerName: 'ID',
                field: 'id',
                disableColumnMenu: true,
                renderCell: ({ row }: CellType<Customer>) => <Typography variant="body2">{row.id}</Typography>
            },
            {
                flex: 0.8,
                headerName: 'Name',
                field: 'name',
                disableColumnMenu: true,
                renderCell: ({ row }: CellType<Customer>) => <Typography variant="body2">{row.name}</Typography>
            },
            {
                flex: 0.8,
                headerName: 'Email',
                field: 'email',
                disableColumnMenu: true,
                renderCell: ({ row }: CellType<Customer>) => <Typography variant="body2">{row.email}</Typography>
            },
            {
                flex: 0.8,
                headerName: 'Phone',
                field: 'phone',
                disableColumnMenu: true,
                renderCell: ({ row }: CellType<Customer>) => <Typography variant="body2">{row.phone}</Typography>
            },
            {
                flex: 0.8,
                headerName: 'Actions',
                field: 'actions',
                disableColumnMenu: true,
                renderCell: ({ row }: CellType<Customer>) => (
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Tooltip title="Edit">
                            <IconButton color="primary" onClick={() => handleOpenEditModal(row)} size="small">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton color="error" onClick={() => handleDeleteCustomer(row.id)} size="small">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Selecionar cliente">
                            <IconButton color="warning" onClick={() => setSelectedId(row.id)} size="small">
                                <SaveIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )
            }
        ],
        []
    );

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

            <PaperContainer elevation={6}>
                <TableContainer sx={{ maxHeight: 440, padding: 2 }}>
                    <CustomTable columns={columns} rows={clientes} />
                </TableContainer>
            </PaperContainer>

            <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
                {clienteSelecionado.name}
            </Typography>

            <Button onClick={() => dispatch(navigatePage('outratela'))} sx={{ mt: 4, backgroundColor: '#fff' }}>
                Outra tela
            </Button>

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
