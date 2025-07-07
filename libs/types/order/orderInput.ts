

interface ShippingAddressInput {
    fullAddress: string;
    city: string;
    postalCode: string;
    country: string;
}



export interface OrderItemInput {
    productId: string;
   itemPrice: number;
   itemQuantity: number;
   orderId?: string

}

export default interface OrderInput {
    orderItems: OrderItemInput[];
    shippingAddress: ShippingAddressInput;
}