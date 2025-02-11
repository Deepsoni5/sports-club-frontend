"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";

const COUNTRY_CODES = [
  { value: "91", label: "91" },
  { value: "1", label: "1" },
  { value: "44", label: "44" },
  { value: "61", label: "61" },
] as const;

export default function VerifyPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("91");
  const [error, setError] = React.useState("");

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, "");

    // Limit to 10 digits
    const truncated = cleaned.slice(0, 10);

    // Format as: 0000 0000 00
    let formatted = truncated;
    if (truncated.length > 4)
      formatted = truncated.slice(0, 4) + " " + truncated.slice(4);
    if (truncated.length > 8)
      formatted = formatted.slice(0, 9) + " " + formatted.slice(9);

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);

    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove spaces and check length
    const digits = phoneNumber.replace(/\s/g, "");

    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    // Navigate to OTP page with phone number, including space after country code
    router.push(`/verify/otp?phone=${countryCode} ${digits}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen grid lg:grid-cols-2 container mx-auto my-8">
        {/* Left Panel - Image */}
        <div className="relative hidden lg:block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signup_main_image.jpg-OaL7SdvSHzslPkOgi7v9x36OTaFawp.jpeg"
            alt="Sports Action"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Panel - Verify Form */}
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Verify your mobile number</h1>
              <p className="text-gray-500">
                We have send you an One Time Password(OTP) on this mobile number
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Select
                    defaultValue={countryCode}
                    onValueChange={setCountryCode}
                  >
                    <SelectTrigger
                      className="w-[90px]"
                      aria-label="Select country code"
                    >
                      <span className="flex items-center">
                        <span className="mr-1">+</span>
                        <SelectValue placeholder="Code" />
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRY_CODES.map((code) => (
                        <SelectItem key={code.value} value={code.value}>
                          {code.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="0000 0000 00"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="flex-1"
                    aria-label="Phone number"
                    aria-invalid={!!error}
                    aria-describedby={error ? "phone-error" : undefined}
                    maxLength={12} // Account for spaces
                  />
                </div>
                {error && (
                  <p id="phone-error" className="text-sm text-red-500">
                    {error}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0047BB] hover:bg-blue-700"
                disabled={phoneNumber.replace(/\s/g, "").length !== 10}
              >
                Get OTP
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
