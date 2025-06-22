'use client';

import { initialOffers } from '@/data/offer';
import { createContext, useContext, useState } from 'react';


export type Offer = {
  id: string;
  influencer: string;
  title: string;
  description: string;
  price: string;
};

type OfferContextType = {
  offers: Offer[];
  addOffer: (offer: Offer) => void;
};

const OfferContext = createContext<OfferContextType | null>(null);

export const useOfferContext = () => {
  const context = useContext(OfferContext);
  if (!context) throw new Error('OfferContext not found');
  return context;
};

export const OfferProvider = ({ children }: { children: React.ReactNode }) => {
  const [offers, setOffers] = useState(initialOffers);

  const addOffer = (offer: Offer) => {
    setOffers((prev) => [...prev, offer]);
  };

  return (
    <OfferContext.Provider value={{ offers, addOffer }}>
      {children}
    </OfferContext.Provider>
  );
};
