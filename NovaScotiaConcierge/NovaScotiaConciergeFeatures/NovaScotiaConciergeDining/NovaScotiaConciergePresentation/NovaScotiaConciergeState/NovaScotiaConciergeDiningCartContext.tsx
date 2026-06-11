import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {novaScotiaConciergeDi} from '../../../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import type {DiningItem} from '../../NovaScotiaConciergeDomain/NovaScotiaConciergeDiningMenuRepository';

export type CartLine = {item: DiningItem; quantity: number};

type Value = {
  cart: Record<string, number>;
  lines: CartLine[];
  itemCount: number;
  total: number;
  addItem: (id: string) => void;
  clearCart: () => void;
};

const Ctx = createContext<Value | null>(null);

export function DiningCartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const menuRepository = novaScotiaConciergeDi.diningMenuRepository;

  const addItem = useCallback(
    (id: string) => setCart(p => ({...p, [id]: (p[id] ?? 0) + 1})),
    [],
  );
  const clearCart = useCallback(() => setCart({}), []);
  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const item = menuRepository.getItemById(id);
          return item && quantity > 0 ? {item, quantity} : null;
        })
        .filter((x): x is CartLine => x !== null),
    [cart, menuRepository],
  );
  const itemCount = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines],
  );
  const total = useMemo(
    () => lines.reduce((s, l) => s + l.item.price * l.quantity, 0),
    [lines],
  );
  const value = useMemo(
    () => ({cart, lines, itemCount, total, addItem, clearCart}),
    [cart, lines, itemCount, total, addItem, clearCart],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDiningCart() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error('useDiningCart requires DiningCartProvider');
  }
  return ctx;
}
