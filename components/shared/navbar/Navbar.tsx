import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/images/logo.png";
import NavActionButton from "./NavActionButton";
import Container from "../Container";
export default function Navbar() {
  return (
    <div>
      <Container className="flex justify-between items-center py-4">
        <NavLinks />
        <Image src={logo} alt="logo_image"></Image>
        <NavActionButton />
      </Container>
      <hr className="h-[1px] w-full border-0 bg-gradient-to-r from-[#D2B450] via-[#f5e6b0] to-[#fdf6da]" />
    </div>
  );
}
