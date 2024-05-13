'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GlobalApi from '@/app/_util/GlobalApi'
import { stringify } from 'postcss'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { LoaderIcon } from 'lucide-react'




function CreateAccount() {
    const [username,setUsername]= useState();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const router=useRouter();
    const [loader,setLoader]=useState();
    useEffect(()=>{
        const jwt = sessionStorage.getItem('jwt');
        if(jwt){
            router.push("/");
        }
    },[])
    const onCreateAccount=()=>{
        setLoader(true);
        GlobalApi.registerUser(username,email,password).then(res=>{
            console.log(res.data.user)
            console.log(res.data.jwt)
            sessionStorage.setItem("user",JSON.stringify(res.data.user));
            sessionStorage.setItem("jwt",res.data.jwt);
            toast("Account Created Successfully")
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
      <h2 className="font-bold text-3xl ">Create Account </h2>
      <h2 className="text-gray-500"> Enter your Email and Password to Create an account</h2>
      <div className="flex flex-col gap-5 w-full mt-7 ">
        <Input placeholder='User Name'
            onChange={(e)=>setUsername(e.target.value)}
        />
        <Input type="email" placeholder='name@gmail.com'
          onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}
           />
        <Button onClick={()=>onCreateAccount()}
            disabled={!(username||email||password)}
        > {loader?<LoaderIcon className='animate-spin'></LoaderIcon>:"Create an Account"} </Button>
        <h2 className="">Already have an account? <Link href={'/sign-in'} className='text-blue-500'>Click here to Sign In</Link></h2>
        </div>
        </div>
        
    </div>
  )
}

export default CreateAccount