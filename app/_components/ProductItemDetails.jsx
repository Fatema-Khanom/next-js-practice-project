import { Button } from '@/components/ui/button';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProductItemDetails = ({product}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
            <Image
                src={product.attributes.images.data[0].attributes.url}
                width={300}
                height={300}
                alt='details image'
                unoptimized={true}
                className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg'
            />
            <div className="">
                <h2 className="text-2xl font-bold">{product.attributes.name}</h2>
                <h2 className="text-sm  text-gray-500 my-3">{product.attributes.description}</h2>
                <div className="flex gap-3 text-3xl">
            {
                product.attributes.sellingPrice&&
                <h2 className="font-bold">${product.attributes.sellingPrice}</h2>
            }
          
            <h2 className={`font-bold ${product.attributes.sellingPrice&&'line-through text-gray-500'}`}>${product.attributes.mrp}</h2>
           </div>
           <h2 className="text-lg font-semibold py-3">Quantity {product.attributes.itemQuantityType}</h2>
           <div className="flex flex-col items-baseline">
                <div className="flex gap-10 border items-center p-2 px-5 ">
                    <button>-</button>
                    <h2 className="">1</h2>
                    <button>+</button>
                </div>
           </div>
           <Button className="gap-2 my-3 bg-green-700"><ShoppingCart></ShoppingCart> Add to Cart</Button>
           <h2 className=""><span className='font-bold'>Category:</span> {product.attributes.categories.data[0].attributes.name}</h2>
            </div>
        </div>
    );
};

export default ProductItemDetails;