import CartIcon from "@/components/icons/CartIcon";

export default () => {
    return(
        <section className="container mx-auto px-4 md:px-0 ">
        <p className=" mb-3 tracking-wide text-blue-primary font-bold uppercase">Eisenacht company</p>
        <h2 className="mb-4 font-bold text-3xl">Fall Limited Edition Eisenacht</h2>
        <p className="text-dark-grayish-blue mb-5">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-[1fr_3fr] font-bold items-center gap-4 mb-5">
            <span className="text-3xl">$125.00</span>
            <span className="bg-pale-blue rounded-md mr-auto py-1 px-2 text-blue-primary">50%</span>
            <span className="md:col-span-2 md:text-left text-right text-grayish-blue text-lg line-through">$250.00</span>
        </div>
        <div className="grid md:grid-cols-[1fr_1.7fr] grid-cols-3 font-bold gap-4">
            <div className="md:col-span-1 col-span-3 py-2 pb-3 px-5 rounded-md bg-gray-200 flex items-baseline justify-between">
                <button className="text-3xl text-blue-primary">-</button>
                <span className="text-xl">0</span>
                <button className="text-3xl text-blue-primary">+</button>
            </div>
            <button className="md:col-span-1 flex transition-all hover:bg-sky-400 items-center col-span-3 justify-center gap-x-3 bg-blue-primary py-3 text-white rounded-md">
                <CartIcon fill="#fff" className="fill-white" />
                <span>Add to cart</span>
            </button>
        </div>
    </section>
    )
}