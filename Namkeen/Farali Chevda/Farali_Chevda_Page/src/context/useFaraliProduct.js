import { useContext } from 'react';
import { FaraliProductContext } from './faraliContextInstance';

export function useFaraliProduct() {
  const ctx = useContext(FaraliProductContext);
  if (!ctx) {
    throw new Error('useFaraliProduct must be used within FaraliProductProvider');
  }
  return ctx;
}

export const useSevProduct = useFaraliProduct;

