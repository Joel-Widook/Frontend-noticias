"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir el tipo para el contexto
type AdsContextType = {
  ads: string;
  setAds: (value: string) => void;
};

// Crear el contexto con un valor inicial
const AdsContext = createContext<AdsContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAds = () => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAds debe ser usado dentro de un AdsProvider");
  }
  return context;
};

// Proveedor del contexto
export const AdsProvider = ({
  children,
  initialValue = "",
}: {
  children: ReactNode;
  initialValue?: string;
}) => {
  const [ads, setAds] = useState<string>(initialValue);

  return (
    <AdsContext.Provider value={{ ads, setAds }}>
      {children}
    </AdsContext.Provider>
  );
};
