"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const ToggleDriverContext = createContext({
  open: false,
  closeOpen: () => {},
  openOpen: () => {},
});
function ToggleDriverProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  function closeOpen() {
    setOpen(false);
  }
  function openOpen() {
    setOpen(true);
  }

  return (
    <ToggleDriverContext.Provider value={{ open, closeOpen, openOpen }}>
      {children}
    </ToggleDriverContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(ToggleDriverContext);
  return context;
}

export default ToggleDriverProvider;
