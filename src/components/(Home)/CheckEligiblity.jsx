"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const spacingOptions = [
  {
    className: "[--card-spacing:--spacing(4)]",
    label: "16px",
    value: "4",
  },
];

export function PhoneNumberSubmition() {
const [result, setResult] = useState("");
const router = useRouter();
const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "701addc5-3cea-4812-9048-62c6f21599c1");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Submitted Successfully ✅");
        event.target.reset();

        setTimeout(() => {
          router.push("/thankyou");
        }, 1000);
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={onSubmit}>
      <Card className="w-full  min-w-[360px] border-white/20 bg-linear-to-br from-white/90 to-blue-50/70 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-2 pb-2">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Check Your Loan Offers 🎉
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <Input
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            className="h-12 border-accent-foreground/20"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl bg-black font-semibold"
          >
            {result === "Submitted Successfully ✅" ? (
              "Submitted ✓"
            ) : isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Finding Best Offers...
              </>
            ) : (
              "See My Offers"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No paperwork • Multiple lenders • Quick response
          </p>
        </CardContent>
      </Card>
    </form>
  );
}
