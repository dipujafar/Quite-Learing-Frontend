"use client";;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AnimatedArrow from "../animation/AnimatedArrow";

const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  phoneNumber: z
    .string()
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function ProfileUpdateFrom() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "Mr.Naym Hasan",
      phoneNumber: "+88012556789",
      email: "naym@gmail.com",
    },
  });

  function onSubmit(values: SignUpFormValues) {
    console.log({ values });
  }

  return (
    <div className="w-full space-y-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 space-y-3"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-primary-color font-bold text-base">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter username"
                    type="text"
                    className="bg-[#d2b45012]  text-foreground placeholder:text-muted-foreground h-12 rounded-lg border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-primary-color font-bold">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    className="bg-[#d2b45012]  text-foreground placeholder:text-muted-foreground h-12 rounded-lg border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-primary-color font-bold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    className="bg-[#d2b45012]  text-foreground placeholder:text-muted-foreground h-12 rounded-lg border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 bg-primary-color hover:bg-[#4a4228] text-white font-semibold rounded-full text-base transition-colors group"
          >
            Save Changes <AnimatedArrow size={24} />
          </Button>
        </form>
      </Form>
    </div>
  );
}
