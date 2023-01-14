import imgProduct1 from "@/assets/images/image-product-1.jpeg"
import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.png"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.png"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.png"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.png"



export default () => {
    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className="col-span-4">
                <img src={imgProduct1} alt=""  className="aspect-[16/12]"/>
                <p>prev</p>
                <p>nextaaaaaaa</p>
            </div>
            <img src={imgProductSmall1} alt="" className="hidden md:block"/>
            <img src={imgProductSmall2} alt="" className="hidden md:block"/>
            <img src={imgProductSmall3} alt="" className="hidden md:block"/>
            <img src={imgProductSmall4} alt="" className="hidden md:block"/>
        </section>
    )
}