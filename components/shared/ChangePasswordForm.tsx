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
import AnimatedArrow from "../animation/AnimatedArrow";

const setNewPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Old password is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SetNewPasswordValues = z.infer<typeof setNewPasswordSchema>;

export function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SetNewPasswordValues>({
    resolver: zodResolver(setNewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SetNewPasswordValues) {
    console.log({ values });
  }

  return (
    <div className="space-y-4">
      <h4 className="text-3xl text-[#584C22]">Change Password</h4>
      <div className="w-full space-y-8 border-2 py-6 px-4 rounded-2xl bg-[#584c2205]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:space-y-6 space-y-3"
          >
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-primary-color font-bold">
                    Current Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter your password"
                        type={currentPassword ? "text" : "password"}
                        className="bg-[#d2b45012] text-foreground placeholder:text-muted-foreground h-12 rounded-lg pr-12 border"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setCurrentPassword(!currentPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {currentPassword ? (
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-primary-color font-bold">
                    New Password
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-primary-color font-bold">
                    Confirm New Password
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
              className="w-full h-12 bg-primary-color hover:bg-[#4a4228] text-white font-semibold rounded-full text-base transition-colors group"
            >
              Update <AnimatedArrow/>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
