export function SecondaryButton({ text, type }) {
    return (
        <button type={type} className=" 
        py-3 px-8 w-52 my-6
        dark:border-3 
        dark:border-white 
        dark:bg-white
        dark:text-dark-blue
        dark:font-bold
        bg-dark-blue 
        text-white  
        rounded
        hover:bg-cyan dark:hover:bg-yellow-500 hover:text-grayish-dark-blue  
        dark:hover:bg-cyan dark:hover:text-grayish-dark-blue">
            {text}
        </button>
    )
}
