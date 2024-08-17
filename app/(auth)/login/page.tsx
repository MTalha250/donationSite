"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    setIsSubmitting(false);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f7f7f8]">
      {/* Left side - Form Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start p-6 lg:pl-32">
        <div className="bg-white p-8 lg:p-10 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-gray-900 text-3xl font-semibold mb-2">
            Welcome back
          </h1>
          <h2 className="text-gray-500 text-sm mb-8">
            Sign in to CARING 4 ALL
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end items-center">
                <Button
                  type="submit"
                  className="py-3 px-6 bg-[#75924B] text-white rounded-lg hover:bg-[#5f743d] transition duration-300 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#75924B] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Visual Section */}
      <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#75924B] to-[#5f743d] flex flex-col items-center justify-center text-white p-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Join our community
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto">
            Empowering individuals to achieve their goals through the power of
            community and support.
          </p>
        </div>
      </div>
    </div>
  );
}
