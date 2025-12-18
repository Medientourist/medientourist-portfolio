import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-blue-800">
      <Image src="/logo.png" alt="Logo" width={96} height={96} />
      <Navigation />
    </header>
  );
}
