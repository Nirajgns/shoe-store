"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <div className="space-y-4">
        <Image
          src={images[currentImage]}
          alt="product image"
          height={1000}
          width={1000}
          className="min-h-[300px] object-cover object-center"
        />

        <div className="flex">
          {images.map((image, index) => (
            <div
              className={cn(
                "border rounded-md mr-2 cursor-pointer hover:border-gray-600",
                currentImage === index && "border-gray-600 rounded-md",
              )}
              key={index}
              onClick={() => setCurrentImage(index)}
            >
              <Image src={image} alt="product image" height={100} width={100} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
