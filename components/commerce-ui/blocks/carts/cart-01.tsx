"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";

// Default logo placeholder
const DEFAULT_LOGO =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/logo-placeholder.png";

// Product item interface
interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Cart component props
interface CartProps {
  storeName?: string;
  logoUrl?: string;
  products?: CartProduct[];
  subtotal?: number;
  shippingCost?: number;
  vatRate?: number;
  currencyPrefix?: string;
  onCheckout?: () => void;
  onContinueShopping?: () => void;
  onUpdateQuantity?: (productId: string, newQuantity: number) => void;
  onRemoveProduct?: (productId: string) => void;
}

// Default products for demo purposes
const DEFAULT_PRODUCTS: CartProduct[] = [
  {
    id: "prod-1",
    name: "Wireless Headphones",
    price: 98.96,
    quantity: 1,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  },
  {
    id: "prod-2",
    name: "Smart Watch",
    price: 129.99,
    quantity: 2,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/watch-1.jpg",
  },
];

function Cart_01({
  storeName = "TechGadgets",
  logoUrl = DEFAULT_LOGO,
  products = DEFAULT_PRODUCTS,
  subtotal = 358.94, // This would typically be calculated from products
  shippingCost = 15.99,
  vatRate = 0.2, // 20% VAT
  currencyPrefix = "$",
  onCheckout = () => {},
  onContinueShopping = () => {},
  onUpdateQuantity = () => {},
  onRemoveProduct = () => {},
}: CartProps = {}) {
  // Calculate VAT and total
  const vatAmount = subtotal * vatRate;
  const totalAmount = subtotal + shippingCost + vatAmount;

  return (
    <div className="w-full max-w-4xl rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Store Header */}
      <div className="flex items-center space-x-4 rounded-t-xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-white p-1">
          <img
            src={logoUrl}
            alt={`${storeName} logo`}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold">{storeName}</h1>
      </div>

      {/* Cart Items */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {products.map((product) => (
          <div key={product.id} className="flex items-center p-6">
            <div className="mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
              <ImageViewer
                imageUrl={product.imageUrl}
                classNameThumbnailViewer="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {product.name}
              </h3>
              <PriceFormat
                prefix={currencyPrefix}
                value={product.price}
                className="mt-1 text-gray-600 dark:text-gray-400"
              />
            </div>

            <div className="flex w-24 items-center justify-center">
              <button
                onClick={() =>
                  product.quantity > 1 &&
                  onUpdateQuantity(product.id, product.quantity - 1)
                }
                className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                -
              </button>
              <span className="mx-2 w-8 text-center text-gray-900 dark:text-gray-100">
                {product.quantity}
              </span>
              <button
                onClick={() =>
                  onUpdateQuantity(product.id, product.quantity + 1)
                }
                className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                +
              </button>
            </div>

            <div className="ml-6 w-24 text-right">
              <PriceFormat
                prefix={currencyPrefix}
                value={product.price * product.quantity}
                className="font-medium text-gray-900 dark:text-gray-100"
              />
            </div>

            <button
              onClick={() => onRemoveProduct(product.id)}
              className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 p-6 dark:bg-gray-800/50">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Order Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Subtotal</span>
            <PriceFormat prefix={currencyPrefix} value={subtotal} />
          </div>

          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Shipping</span>
            <PriceFormat prefix={currencyPrefix} value={shippingCost} />
          </div>

          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>VAT ({(vatRate * 100).toFixed(0)}%)</span>
            <PriceFormat prefix={currencyPrefix} value={vatAmount} />
          </div>

          <div className="border-t border-gray-200 pt-3 dark:border-gray-700">
            <div className="flex justify-between font-bold text-gray-900 dark:text-gray-100">
              <span>Total</span>
              <PriceFormat
                prefix={currencyPrefix}
                value={totalAmount}
                className="text-xl text-blue-600 dark:text-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white transition-all hover:from-blue-700 hover:to-violet-700"
          >
            Proceed to Checkout
          </Button>

          <Button
            variant="outline"
            onClick={onContinueShopping}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:bg-gray-700"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart_01;
export type { CartProps, CartProduct };
