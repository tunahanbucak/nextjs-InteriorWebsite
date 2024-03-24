import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "./Navbar";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Mobilenagivation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={160} height={55} />
            </Link>
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-semibold"
              underlineStyles=""
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
