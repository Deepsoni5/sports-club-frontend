import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold text-blue-600">Sports Ground</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-700"
            asChild
          >
            <Link href="/signin">Login</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
