import { Customer } from './../../types/customer';
import { useEffect, useState } from 'react';
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
    const [selectedId, setSelectedId] = useState<string | null>(null);
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

    const handleClienteSelecionado = (id: string) => {
        const cliente = clientes.find((cliente) => cliente.id === id);
        dispatch(setClienteSelecionado(cliente));
    };

    useEffect(() => {
        console.log('Foi acionado o useEffect dos clientes iniciais');
        fetchInitialCustomers();
    }, []);

    useEffect(() => {
        console.log('Foi acionado');
        if (selectedId) {
            console.log('Buscou o cliente');
            handleClienteSelecionado(selectedId);
        }
    }, [selectedId]);

    const handleCreateCustomer = async (data: Omit<Customer, 'id' | 'createdAt'>) => {
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
    };

    const handleUpdateCustomer = async (data: Customer) => {
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
    };

    const handleDeleteCustomer = async (customerId: string) => {
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
    };

    const handleEditCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleOpenAddModal = () => {
        setIsAddMode(true);
        // Aqui precisamos abrir o modal sem um cliente selecionado
        handleEditCustomer(null as any); // Forçamos o tipo para abrir o modal sem cliente
    };

    const handleOpenEditModal = (customer: Customer) => {
        setIsAddMode(false);
        handleEditCustomer(customer);
    };

    const handleSubmit = (data: Omit<Customer, 'id' | 'createdAt'>) => {
        if (isAddMode) {
            return handleCreateCustomer(data);
        } else {
            return handleUpdateCustomer(data);
        }
    };

    return {
        selectedCustomer,
        isModalOpen,
        isSubmitting,
        isAddMode,
        setSelectedId,
        handleOpenAddModal,
        handleOpenEditModal,
        handleDeleteCustomer,
        handleSubmit,
        closeModal
    };
};
