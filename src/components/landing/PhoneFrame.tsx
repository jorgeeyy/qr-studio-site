import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-card p-1.5 shadow-lg",
        className
      )}
    >
      <div className="overflow-hidden rounded-xl bg-muted">
        {children}
      </div>
    </div>
  );
}
