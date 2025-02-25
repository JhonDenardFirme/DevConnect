"use client";

import React from "react";
import AuthForm from "@/components/forms/authForm";
import SocialsButtons from "@/components/forms/socialsButtons";
import { SignUpSchema } from "@/lib/validations";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className='bg1 flex h-3/4 w-2/5 flex-col items-center justify-center rounded-xl border border-slate-950/10 px-16 py-16  shadow-sm dark:border-slate-50/10'>
        
        <div className='header mb-8 flex w-full flex-col items-center'>
          <p className='text-h2'>Sign Up</p>
          <p className='text-pxs'>Welcome! Please enter your credentials</p>

          <AuthForm formType="SIGN_UP" schema={SignUpSchema} defaultValues={{name:"", username:"", email: "", password: ""}} onsubmit={(data) => Promise.resolve({success: true, data})}></AuthForm>
        </div>
        
        <div className='container mx-8  flex w-full flex-col gap-4 items-center'>

          <div className='h-px w-full flex flex-row justify-between items-center mb-4'>
            <div className='h-px w-full bg-black/10 dark:bg-white/20'></div>
            <p className="text-pxs px-4">OR</p>
            <div className='h-px w-full bg-black/10 dark:bg-white/20'></div>
          </div>

          <SocialsButtons></SocialsButtons>

          <p className="text-psm mt-4">
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="text-psm !text-orange-500"
            >
              Sign in
            </Link>
          </p>
        </div>

    </div>
  );
};

export default SignUp;