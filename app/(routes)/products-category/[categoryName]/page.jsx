import GlobalApi from '@/app/_util/GlobalApi';
import React from 'react';
import TopCategoryList from '../_components/TopcategoryList';
import ProductList from '@/app/_components/ProductList';

export default async function ProductCategory ({params}) {
    const productList = await GlobalApi.getProductsBycatrgory(params.categoryName); 
    const categoryList = await GlobalApi.getCategoryList();
    return (
        <div>
           <h2 className='p-4 bg-primary text-center font-bold text-3xl text-white mb-5'>{params.categoryName}</h2>
           <TopCategoryList categoryList={categoryList}
           selectedCategory={params.categoryName}
           ></TopCategoryList>
           <div className="p-7">
           <ProductList productList={productList}></ProductList>
           </div>
        </div>
    );
};

