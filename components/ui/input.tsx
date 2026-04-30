import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-white file:text-foreground placeholder:text-muted-foreground selection:bg-accent selection:text-accent-foreground flex h-10 w-full min-w-0 rounded-sm border px-3 py-2 text-base font-normal shadow-none transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm md:text-sm focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
