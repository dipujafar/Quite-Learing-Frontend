import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/images/logo.png";
import NavActionButton from "./NavActionButton";
import Container from "../Container";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <Container className="flex justify-between items-center py-4">
        <NavLinks />
        <Link href="/">
          <Image src={logo} alt="logo_image"></Image>
        </Link>
        <NavActionButton />
      </Container>
      <hr className="h-px w-full border-0 bg-linear-to-r from-[#D2B450] via-[#f5e6b0] to-[#fdf6da]" />
    </div>
  );
}
