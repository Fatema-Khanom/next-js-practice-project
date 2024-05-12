import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner';
const [email,setEmail]= useState();
const [password,setPassword]= useState();
const onSignIn=()=>{
//     GlobalApi.registerUser(username,email,password).then(res=>{
//         console.log(res.data.user)
//         console.log(res.data.jwt)
//         sessionStorage.setItem("user",JSON.stringify(res.data.user));
//         sessionStorage.setItem("jwt",res.data.jwt);
//         toast("Account Created Successfully")
//         router.push('/');
        
//     },(e)=>{
//         toast("Error while creating account")
//     }
// )
}
function SignIn() {
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
    >Create an Account</Button>
    <h2 className="">Don't have an account? <Link href={'/create-account'} className='text-blue-500'>Click here to Create accoumt</Link></h2>
    </div>
    </div>
    
</div>
  )
}

export default SignIn