import { createContext, useContext } from "react";
import { usePageState } from './usePageState'
import { Page } from "../utils/types";

type AppStateContextType = ReturnType<typeof usePageState>;

const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType);

type AppStateProviderProps = {
    children: React.ReactNode;
    initialState: Page;
}

export const AppStateProvider = ({children, initialState}: AppStateProviderProps) => {
    if (!initialState) {
        throw new Error('initialState must be defined');
    }

    const pageStateHandlers = usePageState(initialState);

    return (
        <AppStateContext.Provider value={pageStateHandlers}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext);