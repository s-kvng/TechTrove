"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // Implement social sign in logic here.
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      // show toast error

      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to sign in with Provider. Please try again later.",
        variant: "destructive",
        duration: 4000,
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className=" background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="github logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />

        <span>Login with Github</span>
      </Button>

      <Button
        className=" background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="google logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />

        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
