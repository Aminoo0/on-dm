'use client'

import { createContext, useContext, useState } from 'react';

export const PlanTwoHiddenContext = createContext({
    isPlansOneHidden: false,
    test: () => { }
});

export function PlansTwoHiddenProvider({ children }) {
    const [isPlansOneHidden, setIsPlansOneHidden] = useState();
    let test = () => {
        setIsPlansOneHidden(true)
    }

    return (
        <PlanTwoHiddenContext.Provider value={{ isPlansOneHidden, setIsPlansOneHidden, test }}>
            {children}
        </PlanTwoHiddenContext.Provider>
    );
}

export const usePlanTwoHiddenContext = () => useContext(PlanTwoHiddenContext)