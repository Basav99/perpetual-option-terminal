import { cn } from "@/lib/utils";

interface DataCellProps {
  value: string | number;
  type?: "percentage" | "price" | "strike" | "text";
  isPositive?: boolean;
  className?: string;
}

export const DataCell = ({ value, type = "text", isPositive, className }: DataCellProps) => {
  const formattedValue = () => {
    switch (type) {
      case "percentage":
        return `${value}%`;
      case "price":
        return `$${value}`;
      default:
        return value;
    }
  };

  return (
    <div
      className={cn(
        "px-4 py-2 font-mono text-sm transition-colors duration-200",
        type === "percentage" && isPositive !== undefined
          ? isPositive
            ? "text-positive"
            : "text-negative"
          : "text-neutral-800",
        "hover:bg-neutral-50",
        className
      )}
    >
      {formattedValue()}
    </div>
  );
};