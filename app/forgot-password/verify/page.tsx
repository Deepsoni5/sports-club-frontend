"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EmailVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "example@gmail.com";

  const [code, setCode] = React.useState<string[]>(new Array(4).fill(""));
  const [activeInput, setActiveInput] = React.useState(0);
  const [resendTimer, setResendTimer] = React.useState(30);
  const [isResendDisabled, setIsResendDisabled] = React.useState(true);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  React.useEffect(() => {
    // Start resend timer
    if (resendTimer > 0 && isResendDisabled) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
    }
  }, [resendTimer, isResendDisabled]);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 3) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, 4);
    const pastedArray = pastedData.split("").filter((x) => /\d/.test(x));

    const newCode = [...code];
    pastedArray.forEach((value, index) => {
      if (index < 4) newCode[index] = value;
    });
    setCode(newCode);

    // Focus last filled input or first empty input
    const focusIndex = Math.min(pastedArray.length, 3);
    setActiveInput(focusIndex);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      // Reset code fields
      setCode(new Array(4).fill(""));
      setActiveInput(0);
      inputRefs.current[0]?.focus();

      // Reset timer
      setResendTimer(30);
      setIsResendDisabled(true);

      // Add your resend logic here
      console.log("Resending verification code to:", email);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length === 4) {
      // Add your verification logic here
      console.log("Verifying code:", verificationCode);
    }
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

        {/* Right Panel - Email Verification Form */}
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
              <h1 className="text-3xl font-bold">Forgot Password</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Email Verification</h2>
                <p className="text-gray-500">
                  Enter the code from the SMS we sent to {email}
                </p>

                <div className="flex justify-center gap-2 md:gap-4">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        handleChange(value, index);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      className={cn(
                        "w-12 h-12 md:w-14 md:h-14 text-center text-2xl font-semibold rounded-md border",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        "transition-all duration-200",
                        activeInput === index
                          ? "border-blue-500"
                          : "border-gray-200"
                      )}
                      aria-label={`Verification code digit ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-500">
                    Don't receive the OTP?{" "}
                    <button
                      type="button"
                      onClick={handleResend}
                      className={cn(
                        "font-semibold",
                        isResendDisabled
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600 hover:text-blue-700"
                      )}
                      disabled={isResendDisabled}
                    >
                      RESEND
                      {isResendDisabled && ` (${resendTimer}s)`}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0047BB] hover:bg-blue-700"
                disabled={code.some((digit) => !digit)}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
