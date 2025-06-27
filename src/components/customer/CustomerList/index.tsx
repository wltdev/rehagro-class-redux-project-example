import React from 'react';
import {
    ListContainer,
    ListHeader,
    CustomerItem,
    CustomerInfo,
    CustomerName,
    CustomerDetails,
    ActionButtons
} from './styles';
import Button from '../../ui/Button';
import type { Customer } from '../../../types/customer';

interface CustomerListProps {
    customers: Customer[];
    onEdit: (customer: Customer) => void;
    onDelete: (customerId: string) => void;
}

export const CustomerList = ({ customers, onEdit, onDelete }: CustomerListProps) => {
    if (customers.length === 0) {
        return (
            <ListContainer>
                <p>No customers found. Add your first customer!</p>
            </ListContainer>
        );
    }

    return (
        <ListContainer>
            <ListHeader>
                <h3>Customer List</h3>
                <p>{customers.length} customer(s) registered</p>
            </ListHeader>

            {customers.map((customer) => (
                <CustomerItem key={customer.id}>
                    <CustomerInfo>
                        <CustomerName>{customer.name}</CustomerName>
                        <CustomerDetails>
                            <p>
                                <strong>Email:</strong> {customer.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {customer.phone}
                            </p>
                        </CustomerDetails>
                    </CustomerInfo>

                    <ActionButtons>
                        <Button variant="secondary" onClick={() => onEdit(customer)}>
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => onDelete(customer.id)}>
                            Delete
                        </Button>
                    </ActionButtons>
                </CustomerItem>
            ))}
        </ListContainer>
    );
};
