import { Metadata } from "next";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";

export const metadata: Metadata = {
  title: "home",
};

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default async function HomePage() {
  await delay(2000);
  console.log(sampleData);

  return (
    <>
      <div>
        <ProductList
          data={sampleData.products}
          title="New Arrivals "
          limit={4}
        />
      </div>
    </>
  );
}
