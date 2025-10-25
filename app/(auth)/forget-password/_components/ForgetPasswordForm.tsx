"use client";
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
import { useRouter } from "next/navigation";

const forgetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type forgetPasswordValues = z.infer<typeof forgetPasswordSchema>;

export function ForgetPasswordForm() {
  const form = useForm<forgetPasswordValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();

  function onSubmit(values: forgetPasswordValues) {
    router.push("/verify-mail");
    console.log({ values });
  }

  return (
    <div className="w-full space-y-8 max-w-7xl mx-auto px-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 space-y-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold text-primary-color">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    className="bg-[#d2b45012] text-foreground placeholder:text-muted-foreground h-12 rounded-lg border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 bg-primary-color hover:bg-[#4a4228] text-white font-semibold rounded-full text-base transition-colors cursor-pointer"
          >
            Send Code
          </Button>
        </form>
      </Form>
    </div>
  );
}
