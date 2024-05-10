import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ProductItemDetails from './ProductItemDetails';
  

const ProductItem = ({product}) => {
    return (
        <div className='p-2  md-p-6 flex flex-col items-center justify-center border gap-3 rounded-lg hover:scale-105 cursor-pointer transition-all hove:shadow-lg ease-in-out'>
            <Image
                src={product.attributes.images.data[0].attributes.url}
                width={500}
                height={200}
                alt='image'
                unoptimized={true}
                className='h-[200px] w-[200px] object-contain'
            />
            <h2 className="font-bold text-lg">{product.attributes.name}</h2>
           <div className="flex gap-6">
            {
                product.attributes.sellingPrice&&
                <h2 className="font-bold">${product.attributes.sellingPrice}</h2>
            }
          
            <h2 className={`font-bold ${product.attributes.sellingPrice&&'line-through text-gray-400'}`}>${product.attributes.mrp}</h2>
           </div>

            <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-green-800 hover:bg-primary hover:text-white mb-3">
                Add to Cart
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <ProductItemDetails product={product}></ProductItemDetails>
                <DialogDescription>
                    
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>


        </div>
    );
};

export default ProductItem;