'use client'

import { blogs } from '@/data/blog';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined)

export function AppWrapper({ children }) {

    let [makeBlog, setMakeBlog] = useState(blogs);

    return (
        <AppContext.Provider value={{ makeBlog, setMakeBlog }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext)
}