import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
  

const Slider = ({sliderList}) => {
    return (
        <div>
            <Carousel className="mx-5 md:mx-0">
            <CarouselContent >
                {
                    sliderList.map((slider,index)=>(
                        <CarouselItem key={index}>
                            <Image
                                src={slider?.attributes?.image?.data?.attributes?.url}
                                alt='slider'
                                width={1000}
                                height={400}
                                unoptimized={true}
                                className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                            />
                        </CarouselItem>
                    ))
                }
               
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

        </div>
    );
};

export default Slider;