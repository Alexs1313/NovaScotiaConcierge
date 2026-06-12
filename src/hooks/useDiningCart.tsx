import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {getDiningItemById} from '../content/diningMenu';
import type {DiningItem} from '../types';

export type CartLine = {menuItem: DiningItem; quantity: number};

type DiningCartValue = {
  cart: Record<string, number>;
  cartLines: CartLine[];
  itemCount: number;
  total: number;
  addItem: (id: string) => void;
  clearCart: () => void;
};

const DiningCartContext = createContext<DiningCartValue | null>(null);

export function DiningCartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addItem = useCallback(
    (id: string) =>
      setCart(previousCart => ({
        ...previousCart,
        [id]: (previousCart[id] ?? 0) + 1,
      })),
    [],
  );
  const clearCart = useCallback(() => setCart({}), []);
  const cartLines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const menuItem = getDiningItemById(id);
          return menuItem && quantity > 0 ? {menuItem, quantity} : null;
        })
        .filter((line): line is CartLine => line !== null),
    [cart],
  );
  const itemCount = useMemo(
    () => cartLines.reduce((sum, line) => sum + line.quantity, 0),
    [cartLines],
  );
  const total = useMemo(
    () =>
      cartLines.reduce(
        (sum, line) => sum + line.menuItem.price * line.quantity,
        0,
      ),
    [cartLines],
  );
  const value = useMemo(
    () => ({cart, cartLines, itemCount, total, addItem, clearCart}),
    [cart, cartLines, itemCount, total, addItem, clearCart],
  );
  return (
    <DiningCartContext.Provider value={value}>{children}</DiningCartContext.Provider>
  );
}

export function useDiningCart() {
  const diningCart = useContext(DiningCartContext);
  if (!diningCart) {
    throw new Error('useDiningCart must be used within DiningCartProvider');
  }
  return diningCart;
}
