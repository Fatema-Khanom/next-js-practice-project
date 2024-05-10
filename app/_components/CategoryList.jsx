import Image from 'next/image';
import React from 'react';

const CategoryList = ({categoryList}) => {
    return (
        <div className='mt-5'>
            <h2 className=" text-green-600 text-2xl font-bold">Shop by Category</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 mt-2  text-center gap-5">
            {
                categoryList.map((category,index)=>(
                    <div key={index} className="flex flex-col items-center hover:bg-green-600 
                      justify-center rounded-xl p-3  bg-green-50 group">
                        <Image
                            src={category?.attributes?.icon.data?.attributes?.url}
                            alt='icon'
                            width={50}
                            height={50}
                            unoptimized={true}
                            className='w-50 h-50  group-hover:scale-125 transition-all ease-in-out'
                        />
                        <h2 className="text-green-800 group-hover:text-white text- ">{category?.attributes?.name}</h2>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default CategoryList;