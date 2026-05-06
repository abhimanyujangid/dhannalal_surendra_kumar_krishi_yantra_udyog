"use client";

import { type ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Drawer as VaulDrawer } from "vaul";

interface DrawerContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export function useHeaderDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useHeaderDrawer must be used within a HeaderDrawer");
  }
  return context;
}

interface HeaderDrawerProps {
  children: ReactNode;
  drawerBtn?: () => ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export function HeaderDrawer({ children, drawerBtn, open: controlledOpen, setOpen: controlledSetOpen }: HeaderDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <VaulDrawer.Root open={open} direction="top" onOpenChange={setOpen} dismissible={!isDesktop}>
        {drawerBtn ? <VaulDrawer.Trigger asChild>{drawerBtn()}</VaulDrawer.Trigger> : null}
        <VaulDrawer.Portal>
          <VaulDrawer.Overlay className="fixed inset-0 z-50 bg-white/50 backdrop-blur-xs dark:bg-black/40" />
          <VaulDrawer.Content
            className="fixed top-0 left-0 z-50 h-fit w-full border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)] py-3 text-[color:var(--color-text)] shadow-sm"
            aria-describedby={undefined}
          >
            <VaulDrawer.Title className="sr-only">Main navigation menu</VaulDrawer.Title>
            {children}
          </VaulDrawer.Content>
        </VaulDrawer.Portal>
      </VaulDrawer.Root>
    </DrawerContext.Provider>
  );
}
