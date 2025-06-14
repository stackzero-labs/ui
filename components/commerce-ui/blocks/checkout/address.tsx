'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import PriceFormat from '@/components/commerce-ui/components/price-format/basic/price-format-basic';
import AddressList from './address_list'; // Assume this takes proper props
import AddAddressDialog from './add_address_dialog';
import { useRouter } from 'next/navigation';

// Mock address data
const mockAddressList = [
  { id: 'addr1', name: 'John Doe', address: '123 Street, City, State - 123456' },
  { id: 'addr2', name: 'Jane Smith', address: '456 Avenue, Town, State - 654321' },
];

// Mock cart items
const mockCartItems = [
  { id: 'prod1', name: 'Product 1', quantity: 1 },
];

const Address: React.FC = () => {
  const router = useRouter();

  const [nextDisabled, setNextDisabled] = useState(true);
  const [addNewAddress, setAddNewAddress] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const originalTotal = 100;
  const discountedTotal = 80;
  const discountAmount = 20;

  useEffect(() => {
    if (mockAddressList.length > 0) {
      setAddNewAddress(false);
      setSelectedAddress(mockAddressList[0].id);
    } else {
      setAddNewAddress(true);
    }
  }, []);

  useEffect(() => {
    if (selectedAddress && mockCartItems.length > 0) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [selectedAddress]);

  const handleNext = async () => {
    const orderPayload = {
      items: mockCartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      total_amount: discountedTotal,
      address_id: selectedAddress,
      payment_method: 'upi',
    };

    try {
      console.log('Creating order with payload:', orderPayload);
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1000));
      router.push('/checkout?step=payment');
    } catch (error) {
      console.error('Order creation failed:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        {!addNewAddress && (
          <AddressList
            addressList={mockAddressList}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        )}
        <AddAddressDialog type="add" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Details ({mockCartItems.length} Item)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Total MRP</span>
            <PriceFormat prefix="₹" value={originalTotal} className="text-md font-semibold" />
          </div>
          {discountAmount !== 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Discount on MRP</span>
              <PriceFormat prefix="₹" value={discountAmount} className="text-md font-semibold" />
            </div>
          )}
          <div className="flex justify-between">
            <span className="flex items-center space-x-1">
              <span className="text-gray-600">Platform Fee</span>
              <Info className="w-4 h-4 text-green cursor-pointer" />
            </span>
            <span className="font-medium text-green-600">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center space-x-1">
              <span className="text-gray-600">Shipping Fee</span>
              <Info className="w-4 h-4 text-green cursor-pointer" />
            </span>
            <span className="font-medium text-green-600">FREE</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex-col w-full pt-2">
            <div className="flex justify-between w-full border-t pt-2">
              <span>Total Amount</span>
              <PriceFormat prefix="₹" value={discountedTotal} className="text-md font-semibold" />
            </div>
            <Button
              className="w-full mt-4 hover:bg-accent text-white px-4"
              disabled={nextDisabled}
              onClick={handleNext}
            >
              Place Order
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Address;

