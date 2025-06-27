import { useEffect, useState } from 'react';
import { Customer } from '../../../types/customer';
import { faker } from '@faker-js/faker';

type Props = {
    onSubmit: (data: Customer) => Promise<void>;
    initialData?: Customer;
};

export const useCustomerForm = ({ onSubmit, initialData }: Props) => {
    const [formData, setFormData] = useState<Customer>(
        initialData ||
            ({
                name: faker.person.firstName(),
                email: faker.internet.email(),
                phone: faker.phone.number({ style: 'national' }),
                createdAt: new Date()
            } as Customer)
    );

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            onSubmit(formData);
        }
    };

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        validate
    };
};
