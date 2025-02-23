"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialsButtons = () => {

  const handleSignIn = async (provider: "github"| "google") =>{
    try{
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    }
    catch(error){
      console.log(error);
      toast("Sign-In Failed", {
      description: error instanceof Error ?
        error.message :
        "An error occured during Sign-in"
      });
    }
  };


  return (
    <div className='flex h-auto w-full flex-row items-center justify-center gap-4'>
        <Button onClick={() => handleSignIn("github")}>
            <Image src="./icons/github.svg" width={22} height={22} alt="Github icon" className="object-contain invert dark:invert-0"></Image>
            <p className='text-sm'>Sign-in with Github</p>
        </Button>

        <Button onClick={() => handleSignIn("google")}>
            <Image src="./icons/google.svg" width={22} height={22} alt="Google icon" className="object-contain"></Image>
            <p className='text-sm '>Sign-in with Google</p>
        </Button>
    </div>
  );
};

export default SocialsButtons;