import LogoEisenacht  from "@/assets/images/logoeisenacht.png";
import EscudoBoca  from "@/assets/images/escudo-boca.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";



const MainHeader = () => { 

    const [navClass, setNavClass] = useState("hidden h-full md:flex md:mr-auto md:flex-row md:gap-4 md:static md:p-0 font-bold w-4/5")


    const handleOpenMenu = () => {
        setNavClass("absolute bg-white top-0 left-0 h-full p-8 flex flex-col md:flex md:mr-auto md:flex-row md:gap-4 md:static md:p-0 gap-y-5 font-bold w-4/5")
    }
    const handleCloseMenu = () => {
        setNavClass("hidden h-full md:flex md:mr-auto md:flex-row md:gap-4 md:static md:p-0 font-bold w-4/5")
    }
    
    return (
    <header className="container flex items-center mx-auto px-4 gap-8 bg-gray-200">
        <button className="md:hidden" onClick={handleOpenMenu}>
            <MenuIcon/>
        </button>
        <img src={LogoEisenacht} alt="Logo" className="mr-auto md:mr-0 w-52 h-24 mb-1" />
        {/* absolute bg-gray-400 top-0 left-0 h-full p-8 flex flex-col md:flex md:mr-auto md:flex-row md:gap-4 md:static md:p-0 gap-y-5 font-bold w-4/5 */}
        <nav className={navClass}>
            <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                <CloseIcon />
            </button>
            <a href="#">Coleccion</a>
            <a href="#">Hombre</a>
            <a href="#">Mujer</a>
            <a href="#">Contacto</a>
            <a href="#">Nosotros</a>
        </nav>
        <div className="flex gap-4">
            <button className="">
                <CartIcon/>
            </button>
            <img src={EscudoBoca} alt="" className="w-12 h-12"/>
        </div>
</header>
    ) }

export default MainHeader;