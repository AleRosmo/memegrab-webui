import React, { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({ context, children }) {
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
