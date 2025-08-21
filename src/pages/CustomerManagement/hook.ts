import { Customer } from './../../types/customer';
import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
    setMultipleClientes,
    addNewCliente,
    updateCliente,
    deleteCliente,
    setClienteSelecionado
} from '../../store/customerReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useCustomerManagement = () => {
    const { clientes } = useSelector((state: RootState) => state.clientes);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [isAddMode, setIsAddMode] = useState(true);
    const dispatch = useDispatch();

    const fetchInitialCustomers = async () => {
        try {
            const response = await axios.get('/api/customers');
            dispatch(setMultipleClientes(response.data.customers));
        } catch (error) {
            console.error('Error fetching customers from API:', error);
            toast.error('Failed to load customers');
        }
    };

    const handleClienteSelecionado = useCallback(
        (customer: Customer) => {
            dispatch(setClienteSelecionado(customer));
        },
        [dispatch]
    );

    useEffect(() => {
        if (!clientes.length) {
            fetchInitialCustomers();
        }
    }, []);

    const handleCreateCustomer = useCallback(
        async (data: Omit<Customer, 'id' | 'createdAt'>) => {
            setIsSubmitting(true);

            try {
                const newCustomer: Customer = {
                    id: uuidv4(),
                    ...data,
                    createdAt: new Date()
                };
                dispatch(addNewCliente(newCustomer));
                setIsModalOpen(false);
                toast.success('Customer created successfully');
            } catch (error) {
                console.error('Error creating customer:', error);
                toast.error('Failed to create customer');
            } finally {
                setIsSubmitting(false);
            }
        },
        [dispatch]
    );

    const handleUpdateCustomer = useCallback(
        async (data: Customer) => {
            if (!selectedCustomer) return;

            setIsSubmitting(true);

            try {
                setIsModalOpen(false);
                setSelectedCustomer(null);

                dispatch(updateCliente(data));

                toast.success('Customer updated successfully');
            } catch (error) {
                console.error('Error updating customer:', error);
                toast.error('Failed to update customer');
            } finally {
                setIsSubmitting(false);
            }
        },
        [dispatch, selectedCustomer]
    );

    const handleDeleteCustomer = useCallback(
        async (customerId: string) => {
            if (window.confirm('Are you sure you want to delete this customer?')) {
                try {
                    dispatch(
                        deleteCliente({
                            id: customerId
                        })
                    );
                    toast.success('Customer deleted successfully');
                } catch (error) {
                    console.error('Error deleting customer:', error);
                    toast.error('Failed to delete customer');
                }
            }
        },
        [dispatch]
    );

    const handleEditCustomer = useCallback((customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    }, []);

    const handleOpenAddModal = useCallback(() => {
        setIsAddMode(true);
        // Aqui precisamos abrir o modal sem um cliente selecionado
        handleEditCustomer(null as any); // Forçamos o tipo para abrir o modal sem cliente
    }, [handleEditCustomer]);

    const handleOpenEditModal = useCallback(
        (customer: Customer) => {
            setIsAddMode(false);
            handleEditCustomer(customer);
        },
        [handleEditCustomer]
    );

    const handleSubmit = useCallback(
        (data: Omit<Customer, 'id' | 'createdAt'>) => {
            if (isAddMode) {
                return handleCreateCustomer(data);
            } else {
                return handleUpdateCustomer(data);
            }
        },
        [isAddMode, handleCreateCustomer, handleUpdateCustomer]
    );

    return {
        selectedCustomer,
        isModalOpen,
        isSubmitting,
        isAddMode,
        handleClienteSelecionado,
        handleOpenAddModal,
        handleOpenEditModal,
        handleDeleteCustomer,
        handleSubmit,
        closeModal
    };
};
