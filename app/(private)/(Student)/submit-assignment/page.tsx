import Container from "@/components/shared/Container";
import { SubmitAssignmentForm } from "./_components/SubmitAssignmentForm";

export default function SubmitAssignmentPage() {
  return (
    <Container className=" px-0.5 md:px-0.5 lg:px-0.5   xl:px-0.5 py-0.5  bg-linear-to-r from-[#D2B450] via-[#f5e6b0] to-[#fdf6da]">
      <div className=" bg-white  px-2 md:px-6 lg:px-8   xl:px-16 lg:py-14 py-5 lg:space-y-5 space-y-3">
        <h4 className="md:text-3xl text-2xl lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  text-[#06051799]  font-medium  text-center">
          Submit Your Assignment
        </h4>
        <SubmitAssignmentForm />
      </div>
    </Container>
  );
}
