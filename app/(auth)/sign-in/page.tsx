import SocialsButtons from '@/components/forms/socialsButtons'
import { Button } from '@/components/ui/button'
import React from 'react'

const SignIn = () => {
  return (
    <div className='h-3/4 w-2/5 flex flex-col items-center justify-center py-16 px-16 bg1 rounded-xl shadow-sm border border-[1px]  border-slate-950/10 dark:border-slate-50/10'>
        
        <div className='header w-full flex flex-col items-center mb-8'>
          <p className='text-h2'>Sign In</p>
          <p className='text-pxs'>Welcome! Please enter your credentials</p>
        </div>
        
        <div className='container w-full  mx-8 flex flex-col gap-4'>

          <div className='w-full h-[1px] bg-black/10 dark:bg-white/20'></div>
          <SocialsButtons></SocialsButtons>
        </div>

    </div>
  )
}

export default SignIn