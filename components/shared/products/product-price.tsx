import { cn } from "@/lib/utils";
import React from "react";

function ProductPrice({ value, className }: { value: number; className?: string }) {
  const stringValue = value.toFixed(2);
  const [integer, decimal] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-baseline">Rs. </span>
      {integer}.<span className="text-xs align-baseline">{decimal}</span>
    </p>
  );
}

export default ProductPrice;
