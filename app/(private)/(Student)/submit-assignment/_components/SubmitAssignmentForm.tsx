"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const assignmentSchema = z.object({
  title: z.string().min(1, "Assignment title is required").min(3, "Title must be at least 3 characters"),
  price: z
    .string()
    .min(1, "Asking price is required")
    .refine(
      (val) => !isNaN(Number.parseFloat(val)) && Number.parseFloat(val) > 0,
      "Price must be a valid positive number",
    ),
  dueDate: z.date({
    message: "Due date is required",
  }),
  subject: z.string().min(1, "Subject is required").min(3, "Subject must be at least 3 characters"),
  description: z.string().optional(),
})

type AssignmentFormValues = z.infer<typeof assignmentSchema>

export function SubmitAssignmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<AssignmentFormValues>({
    resolver: zodResolver(assignmentSchema),
    defaultValues: {
      title: "",
      price: "",
      dueDate: undefined,
      subject: "",
      description: "",
    },
  })

  async function onSubmit(values: AssignmentFormValues) {
    setIsSubmitting(true)
    try {
      console.log("Form submitted:", values)
      // Handle form submission here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Assignment Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold text-primary-color">Assignment Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title"
                    {...field}
                    className="bg-[#d2b45012] border-[#e8e6e3] text-foreground placeholder:text-muted-foreground h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Asking Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold text-primary-color">Asking Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your price"
                    {...field}
                    type="number"
                    className="bg-[#d2b45012] border-[#e8e6e3] text-foreground placeholder:text-muted-foreground h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Due Date */}
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold text-primary-color">Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal bg-[#d2b45012] border-[#e8e6e3] text-foreground hover:bg-[#f5f3f0]",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "MM/dd/yyyy") : "mm/dd/yyyy"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold text-primary-color">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your subject"
                    {...field}
                    className="bg-[#d2b45012] border-[#e8e6e3] text-foreground placeholder:text-muted-foreground h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold text-primary-color">
                  Description <span className="text-muted-foreground font-normal">(Optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter brief details or requirements"
                    {...field}
                    className="bg-[#d2b45012] border-[#e8e6e3] text-foreground placeholder:text-muted-foreground min-h-32 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-[#5a5238] hover:bg-[#4a4228] text-white font-semibold rounded-full text-base"
          >
            {isSubmitting ? "Submitting..." : "Submit Assignment"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
