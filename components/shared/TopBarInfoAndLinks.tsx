import Link from "next/link";
import Container from "./Container";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MapIcon,
  XIcon,
} from "../icons";
const quickLink = [
  {
    icon: <FacebookIcon />,
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com",
  },
  {
    icon: <XIcon />,
    href: "https://x.com",
  },
];

export default function TopBarInfoAndLinks() {
  return (
    <header className="bg-primary-black text-primary-white py-2  hidden md:block">
      <Container className="flex justify-between items-center  gap-x-2 ">
        <div className="flex items-center gap-x-4">
          <span className="truncate flex items-center gap-x-1">
            <LocationIcon /> 123, Malibag, Dhaka
          </span>
          <Link
            href={"mailto:contact@fashion.com"}
            className="truncate flex items-center gap-x-1"
          >
            <MapIcon /> contact@quitelearing.com
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          {quickLink.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="bg-primary-white/10 p-2.5 rounded-full">{link.icon}</div>
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
