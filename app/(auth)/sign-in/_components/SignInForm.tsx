"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
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
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const role = useSearchParams().get("role");

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignInFormValues) {
    console.log({ values });

    dispatch(
        setUser({
          user: {...values, role},
          token: null,
        })
      );
      toast.success("Login successful!");
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold text-primary-color">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      className="bg-[#d2b45012] text-foreground placeholder:text-muted-foreground h-12 rounded-lg pr-12 border"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <p className="flex justify-end mb-2 px-1">
              <Link
                href="/forget-password"
                className="font-semibold hover:underline text-primary-color"
              >
                Forgot Password?
              </Link>
            </p>

            <Button
              type="submit"
              className="w-full h-12 bg-primary-color hover:bg-[#4a4228] text-white font-semibold rounded-full text-base transition-colors cursor-pointer"
            >
              Sign In
            </Button>
          </div>
        </form>
      </Form>

      <div className="text-center">
        <p className="text-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-semibold  hover:underline text-primary-color"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
