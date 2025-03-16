import { Metadata } from "next";

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
  return <div>HomePage</div>;
}
