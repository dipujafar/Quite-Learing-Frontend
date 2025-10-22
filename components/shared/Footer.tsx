import learningImg from "@/assets/images/Learning.png";
import waterMarkImage from "@/assets/images/footerWaterMarkImage.png";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Container
        style={{
          backgroundImage: `url(${waterMarkImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* 
        Use style prop with template literal — Next.js resolves the imported image path.
        Tailwind handles positioning & sizing.
      */}
        <div className="relative flex flex-col items-center justify-center">
          <Image src={learningImg} alt="Learning" className="z-10" />
        </div>
      </Container>
      <Container>
        <hr />
        <div className="flex justify-between text-primary-gray mt-2">
          <p>© 2025 Bombon by Marketly. All rights reserved.</p>
          <div className="lg:space-x-4 space-x-2">
            <Link href={"/privacy-policy"} className="hover:text-black duration-500">
              Privacy Policy
            </Link>
            <Link href={"/terms-use"} className="hover:text-black duration-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
