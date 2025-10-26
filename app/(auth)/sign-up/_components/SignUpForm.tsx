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

const signUpSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    phoneNumber: z
      .string()
      .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignUpFormValues) {
    console.log({ values });
  }

  return (
    <div className="w-full space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-3">
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-primary-color font-bold">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      className="bg-[#d2b45012]  text-foreground placeholder:text-muted-foreground h-12 rounded-lg pr-12 border"
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-primary-color font-bold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Confirm your password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="bg-[#d2b45012]  text-foreground placeholder:text-muted-foreground h-12 rounded-lg pr-12 border"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
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

          <Button
            type="submit"
            className="w-full h-12 bg-primary-color hover:bg-[#4a4228] text-white font-semibold rounded-full text-base transition-colors"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <div className="text-center">
        <p className="text-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-primary-color hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
