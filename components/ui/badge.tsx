import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 border-black px-2.5 py-1 text-[10px] font-black tracking-[0.2em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#f6f3ee] text-[#111111]",
        secondary: "bg-[#111111] text-[#f6f3ee]",
        accent: "bg-[#d8d2c8] text-[#111111]",
        outline: "bg-transparent text-[#111111]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
