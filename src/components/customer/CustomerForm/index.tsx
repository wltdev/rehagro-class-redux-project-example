import { FormContainer, FormActions } from './styles';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import type { Customer } from '../../../types/customer';
import { useCustomerForm } from './hook';

interface CustomerFormProps {
    onSubmit: (data: Omit<Customer, 'id' | 'createdAt'>) => Promise<void>;
    initialData?: Customer;
    isSubmitting?: boolean;
}

export const CustomerForm = ({ onSubmit, initialData, isSubmitting = false }: CustomerFormProps) => {
    const { formData, errors, handleChange, handleSubmit } = useCustomerForm({ onSubmit, initialData });

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter customer name"
                error={errors.name}
                fullWidth
            />

            <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter customer email"
                error={errors.email}
                fullWidth
            />

            <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(99) 99999-9999"
                error={errors.phone}
                fullWidth
            />

            <FormActions>
                <Button type="submit" disabled={isSubmitting}>
                    {initialData ? 'Update Customer' : 'Create Customer'}
                </Button>
            </FormActions>
        </FormContainer>
    );
};
