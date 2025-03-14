import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./menu";

export default function Header() {
  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href="/" className="flex-start">
              <Image
                alt={`${APP_NAME} logo`}
                src="/images/logo.png"
                height={50}
                width={50}
                priority={true}
              ></Image>
            </Link>
            <span className="hidden lg:block font-bold text-2xl ml-3 ">
              {APP_NAME}
            </span>
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
}
