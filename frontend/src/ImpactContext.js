// src/ImpactContext.js
import React, { createContext, useState } from "react";

export const ImpactContext = createContext();

export function ImpactProvider({ children }) {
  const [impactData, setImpactData] = useState({
    hectares: 0,
    water: 0,
    methane: 0,
    straw: 0,
  });

  return (
    <ImpactContext.Provider value={{ impactData, setImpactData }}>
      {children}
    </ImpactContext.Provider>
  );
}
