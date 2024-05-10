import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_util/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();
  return (
    <div className="p-5 md:p-10 mx-3">
      <Slider sliderList={sliderList}></Slider>

      {/* CategoryList */}
      <CategoryList categoryList={categoryList}></CategoryList>

      {/* Products list */}
    <ProductList productList={productList}></ProductList>
      
    </div>
  );
}
