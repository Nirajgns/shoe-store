"use client";
import React from "react";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        alt={`${APP_NAME} logo`}
        src="/images/logo.png"
        height={100}
        width={100}
        priority={true}
      ></Image>

      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold m-4">Page not Found...!!!</h1>
        <p className="text-destructive">
          Couldnt find the requested page...!!!
        </p>
        <Button
          className="mt-10 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
