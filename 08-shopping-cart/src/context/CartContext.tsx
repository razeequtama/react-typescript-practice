import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type ProductType = {
    id: string,
    product: string,
}

type CartItemType = {
    product:  ProductType,
    quantity: number
}

type CartContext = {
    items: CartItemType[],
    setItems: Dispatch<SetStateAction<CartItemType[]>>
};

export const CartContext = createContext<CartContext | null>(null);

export function CartContextProvider({children}: {children: ReactNode})
{
    const [items, setItems] = useState<CartItemType[]>([]);

    return(
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )

}