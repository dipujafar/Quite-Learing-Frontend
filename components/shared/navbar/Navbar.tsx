import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/images/logo.png";
import NavActionButton from "./NavActionButton";
import Container from "../Container";
export default function Navbar() {
  return (
    <Container className="flex justify-between items-center py-4 border-b border-[#D2B450]">
      <NavLinks />
      <Image src={logo} alt="logo_image"></Image>
      <NavActionButton />
    </Container>
  );
}
