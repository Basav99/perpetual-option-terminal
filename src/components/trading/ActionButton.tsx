import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "buy" | "sell";
}

export const ActionButton = ({ variant, className, ...props }: ActionButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out",
        variant === "buy" 
          ? "bg-positive text-white hover:bg-positive-hover" 
          : "bg-negative text-white hover:bg-negative-hover",
        "transform hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    />
  );
};