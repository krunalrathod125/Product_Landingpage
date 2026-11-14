/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { FaraliProductContext } from './faraliContextInstance';
import { FARALI_PRODUCTS, FARALI_KEYS, DEFAULT_FARALI_KEY } from '../data/faraliProducts';

export function FaraliProductProvider({ children }) {
  const [activeFaraliKey, setActiveFaraliKey] = useState(DEFAULT_FARALI_KEY);

  const activeProduct = FARALI_PRODUCTS[activeFaraliKey] || FARALI_PRODUCTS[DEFAULT_FARALI_KEY];

  return (
    <FaraliProductContext.Provider
      value={{
        activeFaraliKey,
        setActiveFaraliKey,
        activeSevKey: activeFaraliKey,
        setActiveSevKey: setActiveFaraliKey,
        activeProduct,
        products: FARALI_PRODUCTS,
        keys: FARALI_KEYS,
      }}
    >
      {children}
    </FaraliProductContext.Provider>
  );
}

export { useFaraliProduct, useSevProduct } from './useFaraliProduct';
export const SevProductProvider = FaraliProductProvider;
