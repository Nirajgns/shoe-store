import React from "react";
import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen v-screen">
      <Image alt={`Loading...`} src={loader} height={160} width={160}></Image>
    </div>
  );
};
export default LoadingPage;
