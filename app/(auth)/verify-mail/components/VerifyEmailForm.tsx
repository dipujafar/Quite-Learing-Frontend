"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const verificationSchema = z.object({
  code: z
    .string()
    .length(5, "Verification code must be 5 digits")
    .regex(/^\d+$/, "Verification code must contain only numbers"),
});

type VerificationFormValues = z.infer<typeof verificationSchema>;

export function VerifyEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [codeDigits, setCodeDigits] = useState(["", "", "", "", ""]);
  const router = useRouter();

  const form = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const handleDigitChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...codeDigits];
    newDigits[index] = value;

    setCodeDigits(newDigits);
    form.setValue("code", newDigits.join(""));

    // Auto-focus to next input
    if (value && index < 4) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !codeDigits[index] && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      prevInput?.focus();
    }
  };

  async function onSubmit(values: VerificationFormValues) {
    setIsLoading(true);
    try {
      router.push("/set-new-password");

      console.log(values.code);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-3 justify-center">
                    {codeDigits.map((digit, index) => (
                      <Input
                        key={index}
                        id={`digit-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) =>
                          handleDigitChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        placeholder="*"
                        className="lg:size-20 size-14 text-center text-2xl font-semibold bg-[#d2b45012] border-2 border-[#e8e6e3] rounded-lg focus:border-[#6b5d4f] focus:outline-none"
                      />
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading || codeDigits.join("").length !== 5}
            className="w-full bg-primary-color hover:bg-[#5a4d45] text-white font-semibold h-12 rounded-full text-lg"
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
