"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedArrow from "@/components/animation/AnimatedArrow";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactUsForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);
    // Add your API call or form submission logic here
    form.reset();
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(88, 76, 34, 0.00) 0%, rgba(88, 76, 34, 0.09) 135.54%)",
      }}
      className="h-full lg:p-8 p-5 rounded-xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Name</FormLabel>
                <FormControl>
                  <Input
                    className="py-5 bg-slate-50"
                    placeholder="Please enter your name"
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="py-5 bg-slate-50"
                    type="email"
                    placeholder="Please enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here..."
                    className="resize-none bg-slate-50 h-20"
                    rows={5}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary-color hover:bg-[#766836] duration-500 cursor-pointer group">
            Send Message
            <AnimatedArrow/>
          </Button>
        </form>
      </Form>
    </div>
  );
}
