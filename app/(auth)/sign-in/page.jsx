"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoaderIcon } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

function SignIn() {
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const router = useRouter();
    const [loader,setLoader]=useState();
    useEffect(()=>{
        const jwt = sessionStorage.getItem('jwt');
        if(jwt){
            router.push("/");
        }
    },[])        
    const onSignIn=()=>{
        setLoader(true)
    GlobalApi.signIn(email,password).then(res=>{
        console.log(res.data.user)
        console.log(res.data.jwt)
        sessionStorage.setItem("user",JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt",res.data.jwt);
        toast("Login Successfully")
        router.push('/');
        setLoader(false)
        
    },(e)=>{
        toast(e?.response?.data?.error?.message);
        setLoader(false)
    }
)
}
  return (
    <div className='flex items-baseline justify-center my-20'>
    <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border-gray-200">
    <Image
    src="https://online-grocery-store-web.vercel.app/logo.png"
    width={200}
    height={200}
    alt='logo'
    unoptimized={true}
  />
  <h2 className="font-bold text-3xl ">Sign In </h2>
  <h2 className="text-gray-500"> Enter your Email and Password to Sign In account</h2>
  <div className="flex flex-col gap-5 w-full mt-7 ">
    
    <Input type="email" placeholder='name@gmail.com'
      onChange={(e)=>setEmail(e.target.value)} />
    <Input type="password" placeholder='Password'
      onChange={(e)=>setPassword(e.target.value)}
       />
    <Button onClick={()=>onSignIn()}
        disabled={!(email||password)}
    > {loader?<LoaderIcon className='animate-spin'></LoaderIcon>:"Sign In"}</Button>
    <h2 className="">Don't have an account? <Link href={'/create-account'} className='text-blue-500'>Click here to Create accoumt</Link></h2>
    </div>
    </div>
    
</div>
  )
}

export default SignIn