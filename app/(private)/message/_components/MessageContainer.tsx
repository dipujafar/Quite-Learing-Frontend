import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import userImg from "@/assets/images/dummyImages/userImage1.png";
import user2Img from "@/assets/images/dummyImages/userImage2.png";
import user3Img from "@/assets/images/dummyImages/userImage3.png";
import UserCard from "./UserCard";
import ReceiverMsgCard from "./ReceiverMsgCard";
import OwnerMsgCard from "./OwnerMsgCard";
import OfferRequestBtn from "./OfferRequestBtn";

const MessageContainer = () => {
  return (
    <div className="lg:mx-auto ">
      <div className="relative z-10 flex flex-col rounded-xl rounded-t-xl   px-10 py-8 lg:flex-row bg-[#F8FAFC] border-t-8 border-primary-color">
        {/* left */}
        <div className="border-opacity-[40%] pr-2 lg:w-[30%] lg:border-r-2 lg:border-gray-300 ">
          <div className="mx-auto mb-10 mt-4 w-[95%]">
            <Input
              placeholder="Search User..."
              className="w-full h-11 rounded-xl border border-black/50"
            />

            {/* users list - TODO: Use dynamic data */}
            <div className="scroll-hide mt-8 max-h-[calc(100vh-300px)]  space-y-8 overflow-y-auto">
              {Array.from({ length: 6 }).map((_, idx) => (
                <UserCard
                  key={idx}
                  user={{
                    img: user3Img,
                    name: "Elmer Laverty",
                    latestMsg: "Also, Vendor ....",
                  }}
                  active={idx === 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" lg:flex flex-col gap-5 lg:grow lg:px-8  p-2 hidden">
          <div className=" flex items-center justify-between border-b border-opacity-[40%] pb-1 bg-main-color text-black rounded p-2">
            <div className="flex items-center gap-x-2 ">
              <div className="size-14">
                <Image
                  src={userImg}
                  alt="user image"
                  className="aspect-square w-full rounded-full"
                />
              </div>

              <div className="lg:grow">
                <h3 className="text-xl font-semibold ">Florencio Dorrance</h3>

                <div className="mt-1 flex items-center gap-x-1">
                  {/* Active/Online Indicator */}
                  <div className="size-2.5 rounded-full bg-green-500" />
                  <p className=" border-t-black">Active</p>
                </div>
              </div>
            </div>

            {/* <button className="flex items-center gap-x-2">
              <CircleOff size={20} color="#d55758" />
              <p className="text-xl text-black">Block</p>
            </button> */}
          </div>

          <div className="max-h-full space-y-8 overflow-hidden  ">
            <div className="max-h-[calc(100vh-450px)] overflow-y-auto scroll-hide">
              <div className="flex items-start gap-x-4">
                <Image
                  src={userImg}
                  alt="user's image"
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div className="max-w-[50%] space-y-3 overflow-hidden">
                  <ReceiverMsgCard message={"Hi! Welcome to chat."} />
                  <ReceiverMsgCard message={"Hi adeel, how are you ?"} />
                </div>
              </div>

              <div className="flex flex-row-reverse items-start gap-x-4">
                <Image
                  src={user2Img}
                  alt="user's image"
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div className="flex max-w-[50%] flex-col items-end space-y-3">
                  <OwnerMsgCard message={"Hello!"} />
                  <OwnerMsgCard message={"I am fine. What about you ?"} />
                  <OwnerMsgCard
                    message={"I already took service from your app."}
                  />
                </div>
              </div>

              <div className="flex items-start gap-x-4">
                <Image
                  src={userImg}
                  alt="user's image"
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div className="max-w-[50%] space-y-3">
                  <ReceiverMsgCard message={"Oh! Nice. How was the service?"} />
                  <ReceiverMsgCard message={"Is the Vendor behave well ?"} />
                  <ReceiverMsgCard
                    message={
                      "omg, thi perspiciatis consectetur mollitia laboriosam itaque enim officia aut nemo quibusdam?"
                    }
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse items-start gap-x-4">
                <Image
                  src={user2Img}
                  alt="user's image"
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div className="flex max-w-[50%] flex-col items-end space-y-3">
                  <OwnerMsgCard message={"Yeah, Vendor behavior was awesome"} />
                  <OwnerMsgCard message={"Also, Vendor service was good"} />
                </div>
              </div>
            </div>

            <div className="mt-10 flex w-full items-center gap-x-6">
              <Button
                variant="outline"
                type="button"
                className="w-fit h-fit flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 border-none shadow-none bg-transparent p-0 "
              >
                <input type="file" id="fileInput" className="hidden" />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Paperclip></Paperclip>
                </label>
              </Button>
              <div className="flex w-full items-stretch gap-x-4 relative">
                <Input
                  placeholder="Type a message"
                  type="text"
                  className="w-full border-2 border-black/50 bg-transparent px-4 py-5 rounded-3xl"
                />
                <Send
                  size={20}
                  color="#000"
                  className="cursor-pointer absolute right-4 top-3 hover:rotate-45 duration-500"
                />
              </div>
            </div>
            <OfferRequestBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
