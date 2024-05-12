
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function TopCategoryList({categoryList,selectedCategory}) {
  return (
    
        <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
            {
                categoryList.map((category,index)=>(
                    <Link href={'/products-category/'+category?.attributes?.name}  
                     key={index} className={`flex flex-col items-center hover:bg-green-600 
                      justify-center rounded-xl p-3  bg-green-50 group w-[150px] min-w-[100px] ${selectedCategory===category.attributes.name&&'bg-green-600 text-white'}`} >
                        <Image
                            src={category?.attributes?.icon.data?.attributes?.url}
                            alt='icon'
                            width={50}
                            height={50}
                            unoptimized={true}
                            className='w-50 h-50  group-hover:scale-125 transition-all ease-in-out'
                        />
                        <h2 className="text-green-800 group-hover:text-white text- ">{category?.attributes?.name}</h2>
                    </Link>
                ))
            }
            </div>
    
  )
}
