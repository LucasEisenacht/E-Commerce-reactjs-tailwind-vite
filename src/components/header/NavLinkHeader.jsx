export default ({text}) => {
    return (
        <a href="#" className="group py-10 relative">
            <span className="group-hover:text-blue-primary">{text}</span>
            <span className="absolute bottom-0 left-0 block w-full h-1 scale-x-0 group-hover:scale-x-100 transition-all duration-500 group-hover:bg-blue-primary"></span>
        </a>
    )
}