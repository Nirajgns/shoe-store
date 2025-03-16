import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon, EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          <ModeToggle />
          <Button asChild variant="ghost" size="sm">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>

          <Button asChild size="sm">
            <Link href="/sign-in">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </nav>

        <nav className="md:hidden ">
          <Sheet>
            <SheetTrigger>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex-col items-start">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <ModeToggle />
              <div className="flex flex-col items-start space-y-2">
                <Button asChild variant="ghost" className="justify-start">
                  <Link href="/cart">
                    <ShoppingCart />
                    Cart
                  </Link>
                </Button>

                <Button asChild size="sm" className="justify-start">
                  <Link href="/sign-in">
                    <UserIcon />
                    Sign In
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};
