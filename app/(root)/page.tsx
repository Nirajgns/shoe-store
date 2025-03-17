import { Metadata } from "next";
import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata: Metadata = {
  title: "home",
};

export default async function HomePage() {
  //this is an async server function
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals " />
    </>
  );
}
