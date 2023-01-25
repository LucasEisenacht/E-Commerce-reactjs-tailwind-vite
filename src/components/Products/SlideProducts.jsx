import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

import imgProduct1 from "@/assets/images/image-product-1.jpeg"
import imgProduct2 from "@/assets/images/image-product-2.jpeg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpeg"

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.png"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.png"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.png"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.png"

import { useState } from "react";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

export default () => {
    
    const [index,setIndex] = useState(0);

    const handleClickNext = () => { 
        index === ARRAY_IMGS.length-1 ? setIndex(0) : setIndex(index + 1);
    }
    const handleClickPrev = () => {
        index === ARRAY_IMGS.length-4 ? setIndex(3) : setIndex(index - 1);
    }

    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className="col-span-4 relative">
                <img src={ARRAY_IMGS[index]} alt="img"  className="aspect-[16/12] w-full md:aspect-[16/17] md:rounded-md"/>
                <div className="absolute px-4 top-1/2 left-0  w-full flex justify-between -translate-y-1/2"  >
                    <button onClick={handleClickPrev} className="bg-light-grayish-blue w-10 h-10 rounded-full grid place-items-center"><PrevIcon/></button> 
                    <button onClick={handleClickNext} className="bg-light-grayish-blue w-10 h-10 rounded-full grid place-items-center"><NextIcon/></button>    
                </div>
            </div>
            <img src={imgProductSmall1} alt="img1" className=" md:rounded-md hidden md:block"/>
            <img src={imgProductSmall2} alt="img2" className=" md:rounded-md hidden md:block"/>
            <img src={imgProductSmall3} alt="img3" className=" md:rounded-md hidden md:block"/>
            <img src={imgProductSmall4} alt="img4" className=" md:rounded-md hidden md:block"/>
        </section>
    )
}