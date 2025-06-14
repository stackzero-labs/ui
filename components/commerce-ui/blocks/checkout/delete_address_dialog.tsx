'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

type Address = {
  id: string;
  name: string;
  phone_number?: string;
};

interface DialogAddressProps {
  address: Address;
}

const DialogAddress: React.FC<DialogAddressProps> = ({ address }) => {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const deleteAddress = async (body: { address_id: string }) => {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Deleted address:', body.address_id);
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async () => {
    setIsDeleting(true);
    try {
      await deleteAddress({ address_id: address.id });
      console.log('Address deleted successfully');
      // You can integrate toast here or any notification method
    } catch (error) {
      console.error('Failed to delete address:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-destructive">
          <Trash className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {address.name} {address.phone_number && `- ${address.phone_number}`}
            <br />
            You are going to delete this address from your account. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogAddress;

