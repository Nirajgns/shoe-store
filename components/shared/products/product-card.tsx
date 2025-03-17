import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`product/${product.slug}`}>
          <Image alt={product.name} src={product.images[0]} height={300} width={300} priority></Image>
        </Link>
      </CardHeader>
      <CardContent className="p-4 gap-4 grid">
        <div className="text-xs mb-2">{product.brand}</div>

        <Link href={`product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>

        {/* display colors */}
        <div className="flex items-center gap-2">
          <strong className="text">Colors:</strong>
          <div className="flex gap-1">
            {product.colors?.map((color: string, index: number) => (
              <div key={index} className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} title={color}></div>
            ))}
          </div>
        </div>

        {/* display sizes */}
        <div className="flex items-center gap-2">
          <strong className="text">Sizes:</strong>
          <div className="flex gap-1">
            {product.sizes?.map((size: string, index: number) => (
              <div key={index} className="px-2 py-1 text-xs rounded-md border font-medium">
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* display staars and price*/}
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {Number(product.price) > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
