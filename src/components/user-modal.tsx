import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { X } from 'lucide-react';
import UserForm from './user-form';
import { UserModalProps } from '../types';

const UserModal = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  isEdit,
  loading,
}: UserModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 3, bgcolor: 'background.paper' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {isEdit ? 'Edit User' : 'Add New User'}
          <IconButton
            onClick={onClose}
            disabled={loading}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'action.hover',
                color: 'text.primary',
              },
            }}
          >
            <X size={20} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3,
          bgcolor: 'background.paper',
          '& .MuiDialogContent-dividers': {
            borderColor: 'divider',
          },
        }}
      >
        <UserForm
          onSubmit={onSubmit}
          initialValues={initialValues || undefined}
          isEdit={isEdit}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
