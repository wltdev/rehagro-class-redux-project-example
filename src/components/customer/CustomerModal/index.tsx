import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CustomerForm } from '../CustomerForm';
import { Customer } from '../../../types/customer';

type Props = {
    isModalOpen: boolean;
    closeModal: () => void;
    isAddMode: boolean;
    handleSubmit: (data: Omit<Customer, 'id' | 'createdAt'>) => Promise<void>;
    selectedCustomer?: Customer;
    isSubmitting: boolean;
};

export const CustomerModal = ({
    isModalOpen,
    closeModal,
    isAddMode,
    handleSubmit,
    selectedCustomer,
    isSubmitting
}: Props) => {
    return (
        <Dialog
            open={isModalOpen}
            onClose={closeModal}
            fullWidth
            maxWidth="sm"
            sx={{
                borderRadius: 2,
                backgroundImage: 'none'
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {isAddMode ? 'Add New Customer' : 'Edit Customer'}
                <IconButton aria-label="close" onClick={closeModal} sx={{ position: 'absolute', right: 8, top: 8 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <CustomerForm
                    onSubmit={handleSubmit}
                    initialData={!isAddMode ? selectedCustomer || undefined : undefined}
                    isSubmitting={isSubmitting}
                />
            </DialogContent>
        </Dialog>
    );
};
