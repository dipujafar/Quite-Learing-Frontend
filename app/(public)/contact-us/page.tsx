import Container from "@/components/shared/Container";
import { ContactInfo } from "./_components/ContactInfo";
import { ContactUsForm } from "./_components/ContactUsForm";

export default function ContactUsPage() {
  return (
    <Container className=" px-0.5 md:px-0.5 lg:px-0.5   xl:px-0.5 py-0.5  bg-linear-to-r from-[#fdf6da] via-[#f5e6b0] to-[#D2B450]">
      <div className=" bg-white  px-2 md:px-6 lg:px-8   xl:px-16 lg:py-14 py-5 lg:space-y-5 space-y-3 flex gap-5">
        <div className="flex-1">
          <ContactInfo />
        </div>
        <div className="flex-1">
          <ContactUsForm />
        </div>
      </div>
    </Container>
  );
}
