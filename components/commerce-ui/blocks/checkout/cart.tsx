'use client';

import React, { useState, useEffect } from 'react';
import PriceFormat from '@/components/commerce-ui/components/price-format/basic/price-format-basic';
import PriceFormatSale from '@/components/commerce-ui/components/price-format/sale/price-format-sale';
import { Button } from '@/components/ui/button';
import { Plus, Minus, X, Tag } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useRouter } from 'next/navigation';

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price?: number;
  discount?: number | null;
  quantity: number;
  images: string[];
};

const demoCartItems: CartItem[] = [
  {
    description: 'Comfortable cotton t-shirt',
    discount: 25,
    discounted_price: 599,
    id: 1,
    images: [DEFAULT_IMAGE_URL],
    name: 'Red T-Shirt',
    price: 799,
    quantity: 2,
  },
  {
    description: 'Slim fit denim jeans',
    discount: null,
    id: 2,
    images: [DEFAULT_IMAGE_URL],
    name: 'Blue Jeans',
    price: 1999,
    quantity: 1,
  },
];

const Cart: React.FC = ({handlePlaceOrder}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(demoCartItems);

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (item: CartItem) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const originalTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountedTotal = cartItems.reduce((sum, item) => {
    const price = item.discounted_price ?? item.price;
    return sum + price * item.quantity;
  }, 0);

  const discountAmount = originalTotal - discountedTotal;

  return (
    <div className="mx-auto p-4 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 md:p-2">
          <div className="mt-4 md:p-2 rounded border">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger>Available Offers</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">
                    No Offers available at the moment
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-4 md:p-2 border rounded">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-lg font-semibold">Your cart is empty</h3>
                <p className="text-gray-600">
                  Add items to your cart to get started
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <span
                  key={item.id}
                  className="flex gap-2 p-0 py-2 md:p-4 border-b border-gray-200"
                >
                  <img
                    src={
                      item.images.length > 0
                        ? item.images[0]
                        : DEFAULT_IMAGE_URL
                    }
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      {item.discount === null ? (
                        <div>
                          <PriceFormat
                            prefix="₹"
                            value={item.price}
                            className="text-md font-semibold"
                          />
                          <p className="text-muted-foreground text-sm">
                            Inclusive of all taxes
                          </p>
                        </div>
                      ) : (
                        <div>
                          <PriceFormatSale
                            prefix="₹"
                            originalPrice={item.price}
                            salePrice={item.discounted_price ?? item.price}
                            className="text-md font-semibold"
                          />
                          <p className="text-muted-foreground text-sm">
                            Inclusive of all taxes
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border px-2 rounded">
                        <button
                          className="text-gray-500"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="text-gray-500"
                          onClick={() => increaseQuantity(item)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="text-gray-500"
                      onClick={() => handleRemove(item.id)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
                    <div className="flex flex-col md:flex-row w-full gap-2 mt-10 items-center">
  <input
    type="text"
    placeholder="Apply Coupons"
    className="border p-2 rounded flex-1 min-w-0"
    disabled
  />
  <Button className="whitespace-nowrap shrink-0 md:w-auto w-full">Apply</Button>
</div>

          <div className="bg-rose mt-4 p-4 border rounded flex-col items-center justify-between">
            <div className="flex gap-2">
              <img
                src="/images/gift-big.png"
                alt="gift"
                className="w-16 h-16"
              />
              <div>
                <p className="text-sm font-semibold">Buying for a loved one?</p>
                <p className="text-xs text-gray-600">
                  Gift packaging and personalised message on card, only for ₹35
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="mt-2 text-rose-600 text-sm font-semibold"
              onClick={() => alert('Gift package added!')}
            >
              Add Gift Package 
            </Button>
          </div>

          <div className="mt-4 p-4 border rounded">
            <h3 className="font-semibold">
              Price Details ({cartItems.length} Item
              {cartItems.length !== 1 && 's'})
            </h3>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Total MRP</span>
              <PriceFormat
                prefix="₹"
                value={originalTotal}
                className="text-sm font-semibold"
              />
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Discount on MRP</span>
                <PriceFormat
                  prefix="₹"
                  value={discountAmount}
                  className="text-sm font-semibold"
                />
              </div>
            )}
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <PriceFormat
                prefix="₹"
                value={discountedTotal}
                className="text-md font-semibold"
              />
            </div>
          </div>

          <Button className="my-2 w-full" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

