"use client";

import { Spinner, SpinnerProps } from "@heroui/react";
import { useLinkStatus } from "next/link";

export default function PageLoadingIndicator({ ...props }: SpinnerProps) {
  const { pending } = useLinkStatus();

  return pending ? (
    <Spinner
      style={{ "--delay": "1s" } as React.CSSProperties}
      classNames={{
        base: "absolute inset-0 z-50 rounded-hero-lg animate-fade-in",
      }}
      variant="gradient"
      {...props}
    />
  ) : null;
}
