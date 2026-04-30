"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface DialogContextValue {
  open: boolean;
  setOpen: (value: boolean) => void;
  transition: {
    type?: "spring" | "tween";
    bounce?: number;
    duration?: number;
  };
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used inside Dialog.");
  }
  return context;
}

export function Dialog({
  children,
  transition,
}: {
  children: ReactNode;
  transition?: { type?: "spring" | "tween"; bounce?: number; duration?: number };
}) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      setOpen,
      transition: transition ?? { type: "spring", bounce: 0.05, duration: 0.5 },
    }),
    [open, transition],
  );

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { setOpen } = useDialogContext();
  return (
    <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
      {children}
    </button>
  );
}

export function DialogContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function DialogContent({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { open, setOpen, transition } = useDialogContext();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(255,217,0,0.24),rgba(31,31,31,0.8)_45%),radial-gradient(circle_at_80%_80%,rgba(250,82,15,0.22),rgba(31,31,31,0.85)_52%)] px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={transition}
            className={className}
            style={style}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function DialogTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={className}>{children}</h3>;
}

export function DialogDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: unknown;
}) {
  return <div className={className}>{children}</div>;
}

export function DialogImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} width={1600} height={900} className={className} />;
}

export function DialogClose({ className }: { className?: string }) {
  const { setOpen } = useDialogContext();
  return (
    <button type="button" onClick={() => setOpen(false)} className={className}>
      Close
    </button>
  );
}

export function DialogBody(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}
