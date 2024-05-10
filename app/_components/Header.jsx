'use client'
import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from '../_util/GlobalApi'
import Image from 'next/image'
  

function Header() {
    const [categoryList,setCategoryList]= useState([]);
    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList=()=>{
        GlobalApi.getCategory().then(res=>{
            console.log("categoryList resp",res.data.data);
            setCategoryList(res.data.data);
        })
    }  
  return (
    <div className='p-5 shadow-sm flex justify-between '>
        <div className=" flex items-center gap-8">
            <h2>Logo</h2>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <h2 className="md:flex hidden gap-2 border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
                <LayoutGrid className="h-5 w-5"></LayoutGrid>
                Category</h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categoryList.map((category,index)=>(
                        <DropdownMenuItem className="flex gap-2 cursor-pointer items-center">
                            <Image src={
                               category?.attributes?.icon?.data?.attributes?.url}
                                 unoptimized={true}
                                  width={23}
                                   height={23}
                                    alt='icon'>
                                    
                                    </Image>
                            <h2>{category?.attributes?.name}</h2>
                        </DropdownMenuItem>
                    ))}
                    
                </DropdownMenuContent>
                </DropdownMenu>

            <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
                <Search></Search>
                <input type="text" placeholder="Search " className="outline-none" />
            </div>    
        </div>
        <div className="flex gap-5 items-center">
           <h2 className='flex gap-2 text-lg'> <ShoppingCart></ShoppingCart>0</h2>
            <Button>Login</Button>
        </div>

    </div>
  )
}

export default Header