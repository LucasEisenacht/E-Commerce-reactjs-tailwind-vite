import DetailsProducts from "@/components/products/DetailsProducts"
import SlideProducts from "@/components/products/SlideProducts"

const MainProducts = () => { return (
    <main className="grid md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] items-center grid-cols-1 md:grid-cols-2 gap-8">
    <SlideProducts/>
    <DetailsProducts/>
</main>
) }

export default MainProducts