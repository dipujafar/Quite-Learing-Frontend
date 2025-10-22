import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/logo.png";
import NavActionButton from "./NavActionButton";
import Container from "../Container";
export default function Navbar() {
  return (
    <Container className="flex justify-between items-center">
      <NavLinks />
      <Image src={logo} alt="logo_image"></Image>
      <NavActionButton />
    </Container>
  );
}
