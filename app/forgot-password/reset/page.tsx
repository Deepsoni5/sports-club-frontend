"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Eye, EyeOff } from "lucide-react";

interface PasswordRequirement {
  text: string;
  regex: RegExp;
}

const PASSWORD_REQUIREMENTS: PasswordRequirement[] = [
  { text: "At least 8 characters long", regex: /.{8,}/ },
  { text: "Contains at least one uppercase letter", regex: /[A-Z]/ },
  { text: "Contains at least one lowercase letter", regex: /[a-z]/ },
  { text: "Contains at least one number", regex: /\d/ },
  {
    text: "Contains at least one special character",
    regex: /[!@#$%^&*(),.?":{}|<>]/,
  },
];

export default function NewPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = React.useState<string[]>([]);

  const validatePassword = (password: string): string[] => {
    const newErrors: string[] = [];

    PASSWORD_REQUIREMENTS.forEach((requirement) => {
      if (!requirement.regex.test(password)) {
        newErrors.push(requirement.text);
      }
    });

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setErrors(validatePassword(value));
    }
  };

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (errors.length > 0) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }

    // Add your password reset logic here
    console.log("Password reset successful");
    // Navigate to success page or login page
    router.push("/signin");
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

        {/* Right Panel - New Password Form */}
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">New Password</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Password Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter New Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword.password ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("password")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword.password ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword.confirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword.confirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Requirements and Errors */}
                {errors.length > 0 && (
                  <div className="space-y-1">
                    {errors.map((error, index) => (
                      <p key={index} className="text-sm text-red-500">
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0047BB] hover:bg-blue-700"
                disabled={
                  errors.length > 0 ||
                  !formData.password ||
                  !formData.confirmPassword
                }
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
