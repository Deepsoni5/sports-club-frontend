"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Apple, Facebook, Eye, EyeOff } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AdminSignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative">
        {/* Full screen background image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signup_main_image.jpg-OaL7SdvSHzslPkOgi7v9x36OTaFawp.jpeg"
          alt="Sports Action"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay with glass effect */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">Welcome to Sports genre</h1>
              <p className="text-gray-600">Sign up using the form below</p>
            </div>

            <form className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username-email">Username/Email</Label>
                <Input
                  id="username-email"
                  placeholder="Enter your username or email"
                  className="bg-white/80"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-white/80"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-white/80"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="bg-white/80"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0047BB] hover:bg-blue-700"
              >
                SIGNUP
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/90 text-gray-500">
                  or Sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full bg-white/80">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>
              <Button variant="outline" className="w-full bg-white/80">
                <Facebook className="w-5 h-5 text-blue-600" />
              </Button>
              <Button variant="outline" className="w-full bg-white/80">
                <Apple className="w-5 h-5" />
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/admin/signin"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
